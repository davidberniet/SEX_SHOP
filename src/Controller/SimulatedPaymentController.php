<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/payment/simulator')]
#[IsGranted('ROLE_USER')]
class SimulatedPaymentController extends AbstractController
{
    #[Route('/', name: 'app_payment_simulator')]
    public function index(Request $request): Response
    {
        $address = $request->getSession()->get('checkout_address');
        $paymentMethod = $request->getSession()->get('checkout_payment_method');
        $total = $request->getSession()->get('cart_total', 0); // Need to make sure total is passed or retrieved

        if (!$address || !$paymentMethod) {
            $this->addFlash('danger', 'Por favor, completa los pasos anteriores del checkout.');
            return $this->redirectToRoute('app_checkout_address');
        }

        return $this->render('payment/simulator.html.twig', [
            'payment_method' => $paymentMethod,
        ]);
    }
}
