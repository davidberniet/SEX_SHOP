<?php

namespace App\Controller;

use App\Entity\Cliente;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home'); // assuming app_home exists
        }

        if ($request->isMethod('POST')) {
            $user = new Cliente();
            $user->setEmail($request->request->get('email'));
            $user->setNombre($request->request->get('nombre'));
            $user->setVerificadoEdad(true);
            $user->setFechaNacimiento(new \DateTime($request->request->get('fechaNacimiento', '2000-01-01')));
            $user->setNifCif('00000000A'); // default for now

            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $request->request->get('password')
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', 'Cuenta creada correctamente. ¡Ahora puedes iniciar sesión!');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('registration/register.html.twig');
    }
}
