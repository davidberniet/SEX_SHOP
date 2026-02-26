<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'app_admin_dashboard')]
    public function dashboard(\Doctrine\ORM\EntityManagerInterface $em): Response
    {
        $productosCount = $em->getRepository(\App\Entity\Producto::class)->count([]);
        $categoriasCount = $em->getRepository(\App\Entity\Categoria::class)->count([]);
        $atributosCount = $em->getRepository(\App\Entity\Atributo::class)->count([]);
        $variacionesCount = $em->getRepository(\App\Entity\ProductoCombinacion::class)->count([]);

        return $this->render('admin/dashboard.html.twig', [
            'productos_count' => $productosCount,
            'categorias_count' => $categoriasCount,
            'atributos_count' => $atributosCount,
            'variaciones_count' => $variacionesCount,
        ]);
    }
}
