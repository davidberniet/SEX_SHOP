<?php

namespace App\Command;

use App\Entity\Administrador;
use App\Repository\AdministradorRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:create-admin',
    description: 'Creates a new administrator user',
)]
class CreateAdminCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $userPasswordHasher,
        private AdministradorRepository $administradorRepository
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('email', InputArgument::REQUIRED, 'The email of the administrator')
            ->addArgument('password', InputArgument::REQUIRED, 'The password of the administrator')
            ->addArgument('nombre', InputArgument::REQUIRED, 'The name of the administrator')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');
        $nombre = $input->getArgument('nombre');

        // Check if user already exists
        if ($this->administradorRepository->findOneBy(['email' => $email])) {
            $io->error(sprintf('Administrator with email "%s" already exists.', $email));
            return Command::FAILURE;
        }

        $admin = new Administrador();
        $admin->setEmail($email);
        $admin->setNombre($nombre);
        $admin->setRoles(['ROLE_ADMIN']);

        // Hash the password
        $hashedPassword = $this->userPasswordHasher->hashPassword($admin, $password);
        $admin->setPassword($hashedPassword);

        $this->entityManager->persist($admin);
        $this->entityManager->flush();

        $io->success(sprintf('Administrator "%s" created successfully with email "%s".', $nombre, $email));

        return Command::SUCCESS;
    }
}
