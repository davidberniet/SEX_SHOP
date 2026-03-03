<?php

namespace App\DataFixtures;

use App\Entity\Cliente;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ClientFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function load(ObjectManager $manager): void
    {
        // Cliente 1
        $cliente1 = new Cliente();
        $cliente1->setEmail('juan@example.com');
        $cliente1->setNombre('Juan García');
        $cliente1->setNifCif('12345678A');
        $cliente1->setFechaNacimiento(new \DateTime('1990-05-15'));
        $cliente1->setVerificadoEdad(true);
        $password = $this->passwordHasher->hashPassword($cliente1, 'Password123');
        $cliente1->setPassword($password);
        $cliente1->setRoles(['ROLE_USER']);
        $manager->persist($cliente1);

        // Cliente 2
        $cliente2 = new Cliente();
        $cliente2->setEmail('maria@example.com');
        $cliente2->setNombre('María López');
        $cliente2->setNifCif('87654321B');
        $cliente2->setFechaNacimiento(new \DateTime('1988-03-22'));
        $cliente2->setVerificadoEdad(true);
        $password = $this->passwordHasher->hashPassword($cliente2, 'Password123');
        $cliente2->setPassword($password);
        $cliente2->setRoles(['ROLE_USER']);
        $manager->persist($cliente2);

        // Cliente 3
        $cliente3 = new Cliente();
        $cliente3->setEmail('alex@example.com');
        $cliente3->setNombre('Álex Rodríguez');
        $cliente3->setNifCif('11223344C');
        $cliente3->setFechaNacimiento(new \DateTime('1992-07-10'));
        $cliente3->setVerificadoEdad(true);
        $password = $this->passwordHasher->hashPassword($cliente3, 'Password123');
        $cliente3->setPassword($password);
        $cliente3->setRoles(['ROLE_USER']);
        $manager->persist($cliente3);

        $manager->flush();
    }
}
