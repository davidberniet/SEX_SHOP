<?php

namespace App\Controller;

use App\Entity\ProductoCombinacion;
use App\Entity\Producto;
use App\Form\ProductoCombinacionType;
use App\Repository\ProductoCombinacionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/producto-combinacion')]
class ProductoCombinacionController extends AbstractController
{
    #[Route('/producto/{id}/combinaciones', name: 'app_producto_combinaciones', methods: ['GET'])]
    public function index(Producto $producto, ProductoCombinacionRepository $repository): Response
    {
        $combinaciones = $repository->findBy(['producto' => $producto]);

        return $this->render('producto_combinacion/index.html.twig', [
            'producto' => $producto,
            'combinaciones' => $combinaciones,
        ]);
    }

    #[Route('/producto/{id}/combinaciones/new', name: 'app_producto_combinacion_new', methods: ['GET', 'POST'])]
    public function new(Request $request, Producto $producto, EntityManagerInterface $em): Response
    {
        $combinacion = new ProductoCombinacion();
        $combinacion->setProducto($producto);

        $form = $this->createForm(ProductoCombinacionType::class, $combinacion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($combinacion);
            $em->flush();

            $this->addFlash('success', sprintf('Combinación "%s" creada exitosamente.', $combinacion->getDescripcion()));

            return $this->redirectToRoute('app_producto_combinaciones', ['id' => $producto->getId()]);
        }

        return $this->render('producto_combinacion/new.html.twig', [
            'form' => $form,
            'producto' => $producto,
        ]);
    }

    #[Route('/combinacion/{id}', name: 'app_producto_combinacion_show', methods: ['GET'])]
    public function show(ProductoCombinacion $combinacion): Response
    {
        return $this->render('producto_combinacion/show.html.twig', [
            'combinacion' => $combinacion,
        ]);
    }

    #[Route('/combinacion/{id}/edit', name: 'app_producto_combinacion_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ProductoCombinacion $combinacion, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(ProductoCombinacionType::class, $combinacion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();

            $this->addFlash('success', 'Combinación actualizada exitosamente.');

            return $this->redirectToRoute('app_producto_combinaciones', ['id' => $combinacion->getProducto()->getId()]);
        }

        return $this->render('producto_combinacion/edit.html.twig', [
            'combinacion' => $combinacion,
            'form' => $form,
        ]);
    }

    #[Route('/combinacion/{id}', name: 'app_producto_combinacion_delete', methods: ['POST'])]
    public function delete(Request $request, ProductoCombinacion $combinacion, EntityManagerInterface $em): Response
    {
        $productoId = $combinacion->getProducto()->getId();

        if ($this->isCsrfTokenValid('delete' . $combinacion->getId(), $request->getPayload()->get('_token'))) {
            $em->remove($combinacion);
            $em->flush();

            $this->addFlash('success', 'Combinación eliminada exitosamente.');
        }

        return $this->redirectToRoute('app_producto_combinaciones', ['id' => $productoId]);
    }
}
