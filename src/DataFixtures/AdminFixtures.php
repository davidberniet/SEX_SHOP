<?php

namespace App\DataFixtures;

use App\Entity\Administrador;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AdminFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function load(ObjectManager $manager): void
    {
        // Admin 1: SuperAdmin
        $admin1 = new Administrador();
        $admin1->setEmail('admin@sexo.com');
        $admin1->setNombre('Administrador Principal');
        $admin1->setNifCif('00000000Z');
        $admin1->setFechaNacimiento(new \DateTime('1985-01-01'));
        $password = $this->passwordHasher->hashPassword($admin1, 'Admin123!');
        $admin1->setPassword($password);
        $admin1->setRoles(['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']);
        $manager->persist($admin1);

        // Admin 2: Moderator
        $admin2 = new Administrador();
        $admin2->setEmail('moderador@sexo.com');
        $admin2->setNombre('Moderador del Sistema');
        $admin2->setNifCif('11111111A');
        $admin2->setFechaNacimiento(new \DateTime('1988-06-15'));
        $password = $this->passwordHasher->hashPassword($admin2, 'Admin123!');
        $admin2->setPassword($password);
        $admin2->setRoles(['ROLE_ADMIN']);
        $manager->persist($admin2);

        $manager->flush();
    }
}
