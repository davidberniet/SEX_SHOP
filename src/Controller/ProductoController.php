<?php

namespace App\Controller;

use App\Entity\Producto;
use App\Form\ProductoType;
use App\Repository\ProductoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/producto')]
final class ProductoController extends AbstractController
{
    #[Route(name: 'app_producto_index', methods: ['GET'])]
    public function index(Request $request, ProductoRepository $productoRepository): Response
    {
        // Obtener parámetros de búsqueda y filtros
        $nombre = $request->query->get('nombre', '');
        $categoria = $request->query->get('categoria', '');
        $minPrice = $request->query->get('minPrice', '');
        $maxPrice = $request->query->get('maxPrice', '');
        $orderBy = $request->query->get('orderBy', 'nombre');
        $orderDir = $request->query->get('orderDir', 'ASC');

        // Construir criterios de búsqueda
        $criteria = [];
        if (!empty($nombre)) {
            $criteria['nombre'] = $nombre;
        }
        if (!empty($categoria)) {
            $criteria['categoria'] = $categoria;
        }
        if (!empty($minPrice)) {
            $criteria['minPrice'] = $minPrice;
        }
        if (!empty($maxPrice)) {
            $criteria['maxPrice'] = $maxPrice;
        }
        $criteria['orderBy'] = $orderBy;
        $criteria['orderDir'] = $orderDir;
        $criteria['activo'] = true; // Solo mostrar activos en el admin también

        // Si no hay criterios, mostrar todos los productos
        if (empty($criteria) || (count($criteria) <= 2)) {
            $productos = $productoRepository->findActivos();
        } else {
            $productos = $productoRepository->search($criteria);
        }

        return $this->render('producto/index.html.twig', [
            'productos' => $productos,
            'filtros' => [
                'nombre' => $nombre,
                'categoria' => $categoria,
                'minPrice' => $minPrice,
                'maxPrice' => $maxPrice,
                'orderBy' => $orderBy,
                'orderDir' => $orderDir,
            ],
        ]);
    }

    #[Route('/new', name: 'app_producto_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $producto = new Producto();
        $form = $this->createForm(ProductoType::class, $producto);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($producto);
            $entityManager->flush();

            $this->addFlash('success', 'Producto creado exitosamente.');
            return $this->redirectToRoute('app_producto_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('producto/new.html.twig', [
            'producto' => $producto,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_producto_show', methods: ['GET'])]
    public function show(Producto $producto): Response
    {
        return $this->render('producto/show.html.twig', [
            'producto' => $producto,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_producto_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Producto $producto, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ProductoType::class, $producto);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'Producto actualizado exitosamente.');
            return $this->redirectToRoute('app_producto_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('producto/edit.html.twig', [
            'producto' => $producto,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_producto_delete', methods: ['POST'])]
    public function delete(Request $request, Producto $producto, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$producto->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($producto);
            $entityManager->flush();
            $this->addFlash('success', 'Producto eliminado exitosamente.');
        }

        return $this->redirectToRoute('app_producto_index', [], Response::HTTP_SEE_OTHER);
    }
}
