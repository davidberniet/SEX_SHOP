<?php

namespace App\Service;

use App\Repository\ProductoRepository;
use Symfony\Component\HttpFoundation\RequestStack;

class CartService
{
    private $requestStack;
    private $productoRepository;

    public function __construct(RequestStack $requestStack, ProductoRepository $productoRepository)
    {
        $this->requestStack = $requestStack;
        $this->productoRepository = $productoRepository;
    }

    public function add(int $id)
    {
        $session = $this->requestStack->getSession();
        $cart = $session->get('cart', []);

        if (!empty($cart[$id])) {
            $cart[$id]++;
        } else {
            $cart[$id] = 1;
        }

        $session->set('cart', $cart);
    }

    public function remove(int $id)
    {
        $session = $this->requestStack->getSession();
        $cart = $session->get('cart', []);

        if (!empty($cart[$id])) {
            if ($cart[$id] > 1) {
                $cart[$id]--;
            } else {
                unset($cart[$id]);
            }
        }

        $session->set('cart', $cart);
    }

    public function delete(int $id)
    {
        $session = $this->requestStack->getSession();
        $cart = $session->get('cart', []);

        if (!empty($cart[$id])) {
            unset($cart[$id]);
        }

        $session->set('cart', $cart);
    }

    public function clear()
    {
        $session = $this->requestStack->getSession();
        $session->remove('cart');
    }

    public function getFullCart(): array
    {
        $session = $this->requestStack->getSession();
        $cart = $session->get('cart', []);

        $cartData = [];

        foreach ($cart as $id => $quantity) {
            $producto = $this->productoRepository->find($id);

            // Si el producto fue borrado o no existe, lo quitamos de la cesta
            if (!$producto) {
                $this->delete($id);
                continue;
            }

            $cartData[] = [
                'producto' => $producto,
                'cantidad' => $quantity
            ];
        }

        return $cartData;
    }

    public function getTotal(): float
    {
        $total = 0;

        foreach ($this->getFullCart() as $item) {
            /** @var \App\Entity\Producto $producto */
            $producto = $item['producto'];
            $total += $producto->getPrecio() * $item['cantidad'];
        }

        return $total;
    }

    public function getQuantity(): int
    {
        $session = $this->requestStack->getSession();
        $cart = $session->get('cart', []);
        
        return array_sum($cart);
    }
}
