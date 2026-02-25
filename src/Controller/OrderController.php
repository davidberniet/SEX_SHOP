<?php

namespace App\Controller;

use App\Entity\DetallePedido;
use App\Entity\Pago;
use App\Entity\Pedido;
use App\Service\CartService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/order')]
class OrderController extends AbstractController
{
    #[Route('/process', name: 'app_order_process', methods: ['POST'])]
    public function process(Request $request, CartService $cartService, EntityManagerInterface $em): Response
    {
        $address = $request->getSession()->get('checkout_address');
        $paymentMethod = $request->getSession()->get('checkout_payment_method');
        $cartContent = $cartService->getFullCart();

        if (empty($cartContent) || !$address || !$paymentMethod) {
            $this->addFlash('danger', 'Información de checkout incompleta.');
            return $this->redirectToRoute('app_checkout_address');
        }

        // Crear instancia de Pedido
        $pedido = new Pedido();
        $pedido->setFfechaPedido(new \DateTime());
        $pedido->setTotal((string) $cartService->getTotal());
        $pedido->setEmpaquetadoDiscreto(true);
        $pedido->setDirEnvioSnapshot($address->getCalle() . ' - ' . $address->getCiudad() . ' - ' . $address->getCodigaPostal());
        $pedido->setDirFactSnapshot($pedido->getDirEnvioSnapshot());

        // Asociar el cliente al pedido si existe
        if ($this->getUser()) {
            $pedido->setCliente($this->getUser());
        }

        // Manejar la dirección (puede ser una nueva en sesión o una existente elegida)
        if ($address->getId()) {
            // Si tiene ID, la volvemos a obtener de BD para adjuntarla al EntityManager
            $address = $em->getRepository(\App\Entity\Direccion::class)->find($address->getId());
        } else {
            // Si no tiene ID, es nueva y la guardamos
            if ($this->getUser()) {
                $address->setCliente($this->getUser());
            }
            $em->persist($address);
        }

        // Crear los Detalles de Pedido y descontar stock idealmente
        foreach ($cartContent as $item) {
            $producto = $item['producto'];
            $combinaciones = $producto->getCombinaciones();

            $detalle = new DetallePedido();
            $detalle->setPedido($pedido);
            if ($combinaciones && count($combinaciones) > 0) {
                $detalle->setCombinacion($combinaciones->first());
            }
            $detalle->setCantidad($item['cantidad']);
            $detalle->setPrecioUnitario((string) $producto->getPrecio());
            $detalle->setNombreProductoHist($producto->getNombre());

            $em->persist($detalle);
        }

        // Registrar Instancia de Pago
        $pago = new Pago();
        $pago->setPedido($pedido);
        $pago->setEstado('Completado'); // Simulación feliz
        $pago->setMonto((string) $cartService->getTotal());
        $pago->setTransaccionId('SIM-' . uniqid());

        $em->persist($pedido);
        $em->persist($pago);

        // Volcamos todo en base de datos
        $em->flush();

        // Limpiar sesión
        $cartService->clear();
        $request->getSession()->remove('checkout_address');
        $request->getSession()->remove('checkout_payment_method');

        $this->addFlash('success', '¡Pedido completado con éxito! Gracias por tu compra.');

        return $this->redirectToRoute('app_order_success');
    }

    #[Route('/success', name: 'app_order_success')]
    public function success(): Response
    {
        return $this->render('order/success.html.twig');
    }
}
