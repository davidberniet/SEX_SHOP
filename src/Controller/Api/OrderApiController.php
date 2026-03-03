<?php

namespace App\Controller\Api;

use App\Entity\DetallePedido;
use App\Entity\Pedido;
use App\Repository\ProductoRepository;
use App\Repository\PedidoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/orders')]
class OrderApiController extends AbstractController
{
    #[Route('', name: 'api_orders_create', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function createOrder(
        Request $request,
        ProductoRepository $productoRepository,
        EntityManagerInterface $em
    ): JsonResponse {
        $user = $this->getUser();
        if (!$user) {
            return $this->json(['error' => 'User not logged in'], 401);
        }

        $data = json_decode($request->getContent(), true);
        $cartItems = $data['items'] ?? [];

        if (empty($cartItems)) {
            return $this->json(['error' => 'Cart is empty'], 400);
        }

        $pedido = new Pedido();
        $pedido->setCliente($user);
        $pedido->setFfechaPedido(new \DateTime());
        $pedido->setEmpaquetadoDiscreto(true); // Default
        
        // In a real app we would copy addresses from user.
        $pedido->setDirEnvioSnapshot('Dirección de envío por defecto');
        $pedido->setDirFactSnapshot('Dirección de facturación por defecto');

        $total = 0.0;

        foreach ($cartItems as $item) {
            $producto = $productoRepository->find($item['id']);
            if (!$producto) {
                continue;
            }

            $detalle = new DetallePedido();
            $detalle->setCantidad($item['quantity']);
            
            // Get current price
            $precio = (float) $producto->getPrecio();
            $detalle->setPrecioUnitario((string) $precio);
            $detalle->setNombreProductoHist($producto->getNombre());
            
            // We need a ProductoCombinacion based on the DetallePedido schema
            $combinacion = $producto->getCombinaciones()->first();
            if (!$combinacion) {
                // Auto-create a default combination if the product doesn't have one
                $combinacion = new \App\Entity\ProductoCombinacion();
                $combinacion->setProducto($producto);
                $sku = substr(strtoupper(uniqid($producto->getNombre() . '_', true)), 0, 100);
                $combinacion->setSku($sku);
                $combinacion->setPrecioEspecifico($producto->getPrecio());
                $combinacion->setCantidad(100); // Default placeholder stock
                $combinacion->setActivo(true);
                
                $em->persist($combinacion);
                $producto->addCombinacione($combinacion);
            }
            $detalle->setCombinacion($combinacion);

            $pedido->addDetalle($detalle);
            $em->persist($detalle);

            $total += $precio * $item['quantity'];
        }

        $pedido->setTotal((string) $total);
        $em->persist($pedido);
        $em->flush();

        return $this->json([
            'message' => 'Order created successfully',
            'orderId' => $pedido->getId()
        ], 201);
    }

    #[Route('/me', name: 'api_orders_me', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function getMyOrders(PedidoRepository $pedidoRepository): JsonResponse
    {
        $user = $this->getUser();
        if (!$user) {
            return $this->json(['error' => 'User not logged in'], 401);
        }

        $pedidos = $pedidoRepository->findBy(['cliente' => $user], ['id' => 'DESC']);
        $data = [];

        foreach ($pedidos as $pedido) {
            $detallesData = [];
            foreach ($pedido->getDetalles() as $detalle) {
                $detallesData[] = [
                    'id' => $detalle->getId(),
                    'cantidad' => $detalle->getCantidad(),
                    'precioUnitario' => (float) $detalle->getPrecioUnitario(),
                    'nombreProducto' => $detalle->getNombreProductoHist(),
                ];
            }

            $data[] = [
                'id' => $pedido->getId(),
                'fecha' => $pedido->getFfechaPedido()->format('Y-m-d H:i:s'),
                'total' => (float) $pedido->getTotal(),
                'detalles' => $detallesData,
            ];
        }

        return $this->json($data);
    }
}