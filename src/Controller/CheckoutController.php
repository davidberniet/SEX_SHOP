<?php

namespace App\Controller;

use App\Entity\Direccion;
use App\Form\DireccionType;
use App\Service\CartService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/checkout')]
class CheckoutController extends AbstractController
{
    #[Route('/', name: 'app_checkout')]
    public function index(): Response
    {
        return $this->redirectToRoute('app_checkout_address');
    }

    #[Route('/address', name: 'app_checkout_address')]
    public function address(Request $request, EntityManagerInterface $em, CartService $cartService): Response
    {
        if (empty($cartService->getFullCart())) {
            return $this->redirectToRoute('app_cart');
        }

        /** @var \App\Entity\Cliente|null $user */
        $user = $this->getUser();

        // 1. Process existing address selection if submitted
        if ($request->isMethod('POST') && $request->request->get('existing_address_id')) {
            $addressId = $request->request->get('existing_address_id');
            $direccion = $em->getRepository(Direccion::class)->find($addressId);

            if ($direccion && $direccion->getCliente() === $user) {
                // Save selected existing address to session
                $request->getSession()->set('checkout_address', $direccion);
                return $this->redirectToRoute('app_checkout_payment');
            }
        }

        // 2. Process new address form
        $direccion = new Direccion();
        if ($user) {
            $direccion->setCliente($user);
        }

        $form = $this->createForm(DireccionType::class, $direccion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // We just store it in session. It will be persisted in OrderController at the end.
            $request->getSession()->set('checkout_address', $direccion);
            return $this->redirectToRoute('app_checkout_payment');
        }

        return $this->render('checkout/address.html.twig', [
            'form' => $form->createView(),
            'cart' => $cartService->getFullCart(),
            'total' => $cartService->getTotal(),
            'user_addresses' => $user ? $user->getDirecciones() : []
        ]);
    }

    #[Route('/payment', name: 'app_checkout_payment')]
    public function payment(Request $request, CartService $cartService): Response
    {
        if (!$request->getSession()->get('checkout_address')) {
            return $this->redirectToRoute('app_checkout_address');
        }

        if ($request->isMethod('POST')) {
            $paymentMethod = $request->request->get('payment_method');
            $request->getSession()->set('checkout_payment_method', $paymentMethod);
            return $this->redirectToRoute('app_checkout_summary');
        }

        return $this->render('checkout/payment.html.twig', [
            'cart' => $cartService->getFullCart(),
            'total' => $cartService->getTotal(),
        ]);
    }

    #[Route('/summary', name: 'app_checkout_summary')]
    public function summary(Request $request, CartService $cartService): Response
    {
        $address = $request->getSession()->get('checkout_address');
        $paymentMethod = $request->getSession()->get('checkout_payment_method');

        if (!$address || !$paymentMethod) {
            return $this->redirectToRoute('app_checkout_address');
        }

        return $this->render('checkout/summary.html.twig', [
            'cart' => $cartService->getFullCart(),
            'total' => $cartService->getTotal(),
            'address' => $address,
            'payment_method' => $paymentMethod
        ]);
    }
}
