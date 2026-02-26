<?php

namespace App\Controller\Api;

use App\Repository\ProductoRepository;
use App\Repository\CategoriaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class ProductApiController extends AbstractController
{
    #[Route('/products', name: 'products_list', methods: ['GET'])]
    public function getProducts(ProductoRepository $productoRepository): JsonResponse
    {
        $productos = $productoRepository->findActivos();
        $data = [];

        foreach ($productos as $producto) {
            $data[] = [
                'id' => $producto->getId(),
                'name' => $producto->getNombre(),
                'price' => (float) $producto->getPrecio(),
                // 'originalPrice' => null,
                'category' => $producto->getCategoria() ? $producto->getCategoria()->getNombre() : 'Uncategorized',
                'image' => $producto->getImagenUrl() ?? 'https://via.placeholder.com/400',
                // 'badge' => null
            ];
        }

        return $this->json($data);
    }

    #[Route('/products/{id}', name: 'product_show', methods: ['GET'])]
    public function getProduct(int $id, ProductoRepository $productoRepository): JsonResponse
    {
        $producto = $productoRepository->find($id);

        if (!$producto || !$producto->isActivo()) {
            return $this->json(['error' => 'Product not found'], 404);
        }

        $data = [
            'id' => $producto->getId(),
            'name' => $producto->getNombre(),
            'price' => (float) $producto->getPrecio(),
            'category' => $producto->getCategoria() ? $producto->getCategoria()->getNombre() : 'Uncategorized',
            'image' => $producto->getImagenUrl() ?? 'https://via.placeholder.com/400',
            'description' => $producto->getDescripcionGeneral(),
        ];

        return $this->json($data);
    }

    #[Route('/categories', name: 'categories_list', methods: ['GET'])]
    public function getCategories(CategoriaRepository $categoriaRepository): JsonResponse
    {
        $categorias = $categoriaRepository->findAll();
        // The first option is typically "Todos" in the frontend
        $data = ['Todos'];

        foreach ($categorias as $categoria) {
            $data[] = $categoria->getNombre();
        }

        return $this->json($data);
    }
}
