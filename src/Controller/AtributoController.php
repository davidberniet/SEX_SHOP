<?php

namespace App\Controller;

use App\Entity\Atributo;
use App\Form\AtributoType;
use App\Repository\AtributoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/atributo')]
class AtributoController extends AbstractController
{
    #[Route('', name: 'app_atributo_index', methods: ['GET'])]
    public function index(AtributoRepository $repository): Response
    {
        $atributos = $repository->findAll();

        return $this->render('atributo/index.html.twig', [
            'atributos' => $atributos,
        ]);
    }

    #[Route('/new', name: 'app_atributo_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $atributo = new Atributo();
        $form = $this->createForm(AtributoType::class, $atributo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($atributo);
            $em->flush();

            $this->addFlash('success', sprintf('Atributo "%s" creado exitosamente.', $atributo->getNombre()));

            return $this->redirectToRoute('app_atributo_index');
        }

        return $this->render('atributo/new.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_atributo_show', methods: ['GET'])]
    public function show(Atributo $atributo): Response
    {
        return $this->render('atributo/show.html.twig', [
            'atributo' => $atributo,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_atributo_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Atributo $atributo, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(AtributoType::class, $atributo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();

            $this->addFlash('success', sprintf('Atributo "%s" actualizado exitosamente.', $atributo->getNombre()));

            return $this->redirectToRoute('app_atributo_show', ['id' => $atributo->getId()]);
        }

        return $this->render('atributo/edit.html.twig', [
            'atributo' => $atributo,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_atributo_delete', methods: ['POST'])]
    public function delete(Request $request, Atributo $atributo, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete' . $atributo->getId(), $request->getPayload()->get('_token'))) {
            $em->remove($atributo);
            $em->flush();

            $this->addFlash('success', sprintf('Atributo "%s" eliminado exitosamente.', $atributo->getNombre()));
        }

        return $this->redirectToRoute('app_atributo_index');
    }
}
