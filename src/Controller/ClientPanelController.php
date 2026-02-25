<?php

namespace App\Controller;

use App\Entity\Pedido;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/perfil')]
#[IsGranted('ROLE_USER')]
class ClientPanelController extends AbstractController
{
    #[Route('/', name: 'app_client_panel')]
    public function index(): Response
    {
        return $this->render('client_panel/index.html.twig', [
            'user' => $this->getUser(),
        ]);
    }

    #[Route('/pedidos', name: 'app_client_orders')]
    public function orders(EntityManagerInterface $em): Response
    {
        $user = $this->getUser();
        $pedidos = $em->getRepository(Pedido::class)->findBy(['cliente' => $user], ['id' => 'DESC']);

        return $this->render('client_panel/orders.html.twig', [
            'pedidos' => $pedidos,
        ]);
    }

    #[Route('/pedidos/{id}', name: 'app_client_order_detail')]
    public function orderDetail(Pedido $pedido): Response
    {
        if ($pedido->getCliente() !== $this->getUser()) {
            throw $this->createAccessDeniedException('No tienes permiso para ver este pedido.');
        }

        return $this->render('client_panel/order_detail.html.twig', [
            'pedido' => $pedido,
        ]);
    }

    #[Route('/direcciones', name: 'app_client_addresses')]
    public function addresses(EntityManagerInterface $em): Response
    {
        /** @var \App\Entity\Cliente $user */
        $user = $this->getUser();
        $direcciones = $user->getDirecciones();

        return $this->render('client_panel/addresses.html.twig', [
            'direcciones' => $direcciones,
        ]);
    }

    #[Route('/direcciones/nueva', name: 'app_client_address_new')]
    public function newAddress(\Symfony\Component\HttpFoundation\Request $request, EntityManagerInterface $em): Response
    {
        $direccion = new \App\Entity\Direccion();
        $direccion->setCliente($this->getUser());

        $form = $this->createForm(\App\Form\DireccionType::class, $direccion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($direccion);
            $em->flush();

            $this->addFlash('success', 'Dirección añadida correctamente.');
            return $this->redirectToRoute('app_client_addresses');
        }

        return $this->render('client_panel/address_form.html.twig', [
            'form' => $form->createView(),
            'titulo' => 'Nueva Dirección'
        ]);
    }

    #[Route('/direcciones/{id}/editar', name: 'app_client_address_edit')]
    public function editAddress(\App\Entity\Direccion $direccion, \Symfony\Component\HttpFoundation\Request $request, EntityManagerInterface $em): Response
    {
        if ($direccion->getCliente() !== $this->getUser()) {
            throw $this->createAccessDeniedException('No tienes permiso para editar esta dirección.');
        }

        $form = $this->createForm(\App\Form\DireccionType::class, $direccion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();
            $this->addFlash('success', 'Dirección actualizada correctamente.');
            return $this->redirectToRoute('app_client_addresses');
        }

        return $this->render('client_panel/address_form.html.twig', [
            'form' => $form->createView(),
            'titulo' => 'Editar Dirección'
        ]);
    }

    #[Route('/direcciones/{id}/eliminar', name: 'app_client_address_delete')]
    public function deleteAddress(\App\Entity\Direccion $direccion, EntityManagerInterface $em): Response
    {
        if ($direccion->getCliente() !== $this->getUser()) {
            throw $this->createAccessDeniedException('No tienes permiso para eliminar esta dirección.');
        }

        $em->remove($direccion);
        $em->flush();

        $this->addFlash('success', 'Dirección eliminada correctamente.');
        return $this->redirectToRoute('app_client_addresses');
    }
}
