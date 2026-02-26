<?php

namespace App\Controller;

use App\Entity\Categoria;
use App\Entity\Producto;
use App\Entity\Atributo;
use App\Entity\AtributoValor;
use App\Entity\Administrador;
use \Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SeedController extends AbstractController
{
    #[Route('/seed-data', name: 'seed_data')]
    public function seedData(EntityManagerInterface $em, UserPasswordHasherInterface $userPasswordHasher): Response
    {
        // Crear Administrador
        $admin = new Administrador();
        $admin->setEmail('admin@admin.com');
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setNombre('Administrador Principal');
        $admin->setPassword($userPasswordHasher->hashPassword($admin, 'admin123'));
        $em->persist($admin);

        // Crear categoría
        $categoria = new Categoria();
        $categoria->setNombre('Vibradores');
        $categoria->setDescripcion('Productos vibradores de alta calidad');
        $em->persist($categoria);

        // Crear atributos
        $atributoColor = new Atributo();
        $atributoColor->setNombre('Color');
        
        $colorRojo = new AtributoValor();
        $colorRojo->setValor('Rojo');
        $colorRojo->setAtributo($atributoColor);
        
        $colorNegro = new AtributoValor();
        $colorNegro->setValor('Negro');
        $colorNegro->setAtributo($atributoColor);
        
        $atributoColor->addValore($colorRojo);
        $atributoColor->addValore($colorNegro);
        $em->persist($atributoColor);

        $atributoTamaño = new Atributo();
        $atributoTamaño->setNombre('Tamaño');
        
        $tamanioMini = new AtributoValor();
        $tamanioMini->setValor('Mini');
        $tamanioMini->setAtributo($atributoTamaño);
        
        $tamanioNormal = new AtributoValor();
        $tamanioNormal->setValor('Normal');
        $tamanioNormal->setAtributo($atributoTamaño);
        
        $atributoTamaño->addValore($tamanioMini);
        $atributoTamaño->addValore($tamanioNormal);
        $em->persist($atributoTamaño);

        // Crear producto
        $producto = new Producto();
        $producto->setNombre('Vibrador Deluxe');
        $producto->setDescripcionGeneral('El mejor vibrador del mercado con múltiples velocidades y modos');
        $producto->setPrecio('50.00');
        $producto->setImagenUrl('https://via.placeholder.com/400x400?text=Vibrador+Deluxe');
        $producto->setActivo(true);
        $producto->setCategoria($categoria);
        $em->persist($producto);

        $em->flush();

        return new Response('✅ Datos de prueba creados correctamente! <a href="/producto">Ver productos</a>');
    }
}
