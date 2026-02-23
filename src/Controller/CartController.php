<?php

namespace App\Controller;

use App\Service\CartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/cart')]
class CartController extends AbstractController
{
    #[Route('/', name: 'app_cart')]
    public function index(CartService $cartService): Response
    {
        return $this->render('cart/index.html.twig', [
            'cart' => $cartService->getFullCart(),
            'total' => $cartService->getTotal(),
        ]);
    }

    #[Route('/add/{id}', name: 'app_cart_add')]
    public function add(CartService $cartService, int $id): Response
    {
        $cartService->add($id);

        $this->addFlash('success', 'Producto añadido correctamente al carrito.');

        return $this->redirectToRoute('app_cart');
    }

    #[Route('/remove/{id}', name: 'app_cart_remove')]
    public function remove(CartService $cartService, int $id): Response
    {
        $cartService->remove($id);

        $this->addFlash('warning', 'Producto restado del carrito.');

        return $this->redirectToRoute('app_cart');
    }

    #[Route('/delete/{id}', name: 'app_cart_delete')]
    public function delete(CartService $cartService, int $id): Response
    {
        $cartService->delete($id);

        $this->addFlash('danger', 'Producto eliminado del carrito.');

        return $this->redirectToRoute('app_cart');
    }

    #[Route('/clear', name: 'app_cart_clear')]
    public function clear(CartService $cartService): Response
    {
        $cartService->clear();

        $this->addFlash('danger', 'Carrito vaciado correctamente.');

        return $this->redirectToRoute('app_cart');
    }
}
