<?php

namespace App\DataFixtures;

use App\Entity\Categoria;
use App\Entity\Producto;
use App\Entity\ProductoCombinacion;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture
{
    public const CATEGORIA_JUGUETES_REFERENCE = 'categoria-juguetes';
    public const CATEGORIA_LENCERIA_REFERENCE = 'categoria-lenceria';
    public const CATEGORIA_LUBRICANTES_REFERENCE = 'categoria-lubricantes';
    public const CATEGORIA_ACCESORIOS_REFERENCE = 'categoria-accesorios';

    public function load(ObjectManager $manager): void
    {
        // Crear categorías
        $categorias = $this->createCategories($manager);

        // Crear productos
        $this->createProducts($manager, $categorias);

        $manager->flush();
    }

    private function createCategories(ObjectManager $manager): array
    {
        $categorias = [];

        // Categoría: Juguetes
        $catJuguetes = new Categoria();
        $catJuguetes->setNombre('Juguetes');
        $catJuguetes->setDescripcion('Juguetes y vibradores de alta calidad para el placer');
        $manager->persist($catJuguetes);
        $categorias[self::CATEGORIA_JUGUETES_REFERENCE] = $catJuguetes;

        // Categoría: Lencería
        $catLenceria = new Categoria();
        $catLenceria->setNombre('Apparel');
        $catLenceria->setDescripcion('Lencería fina y elegante para la seducción');
        $manager->persist($catLenceria);
        $categorias[self::CATEGORIA_LENCERIA_REFERENCE] = $catLenceria;

        // Categoría: Lubricantes
        $catLubricantes = new Categoria();
        $catLubricantes->setNombre('Lubricantes');
        $catLubricantes->setDescripcion('Lubricantes y geles íntimos de calidad superior');
        $manager->persist($catLubricantes);
        $categorias[self::CATEGORIA_LUBRICANTES_REFERENCE] = $catLubricantes;

        // Categoría: Accesorios
        $catAccesorios = new Categoria();
        $catAccesorios->setNombre('Accesorios');
        $catAccesorios->setDescripcion('Accesorios y complementos para la intimidad');
        $manager->persist($catAccesorios);
        $categorias[self::CATEGORIA_ACCESORIOS_REFERENCE] = $catAccesorios;

        return $categorias;
    }

    private function createProducts(ObjectManager $manager, array $categorias): void
    {
        // Producto 1: Vibrador Deluxe
        $p1 = new Producto();
        $p1->setNombre('Vibrador Deluxe');
        $p1->setDescripcionGeneral('Vibrador de silicona de grado médico con 10 modos de vibración. Recargable USB, sumergible y de fácil limpieza. Perfecta para exploraciones solitarias o en pareja.');
        $p1->setPrecio('49.99');
        $p1->setImagenUrl('/uploads/productos/vibradorejemplo1-699d96dc8cf65.jpg');
        $p1->setActivo(true);
        $p1->setCategoria($categorias[self::CATEGORIA_JUGUETES_REFERENCE]);
        
        // Agregar combinación
        $comb1 = new ProductoCombinacion();
        $comb1->setProducto($p1);
        $comb1->setSku('VIBRA-001');
        $comb1->setPrecioEspecifico('49.99');
        $comb1->setCantidad(15);
        $comb1->setActivo(true);
        $manager->persist($comb1);
        $p1->addCombinacione($comb1);
        
        $manager->persist($p1);

        // Producto 2: Anarosa
        $p2 = new Producto();
        $p2->setNombre('Anarosa Luxury');
        $p2->setDescripcionGeneral('Juguete anal de silicona suave con forma ergonómica. Perfecto para principiantes gracias a su tamaño moderado y material flexible. Seguro para el cuerpo.');
        $p2->setPrecio('34.99');
        $p2->setImagenUrl('/uploads/productos/anarosa-69a037b5ef631.png');
        $p2->setActivo(true);
        $p2->setCategoria($categorias[self::CATEGORIA_JUGUETES_REFERENCE]);
        
        $comb2 = new ProductoCombinacion();
        $comb2->setProducto($p2);
        $comb2->setSku('ANAROSA-001');
        $comb2->setPrecioEspecifico('34.99');
        $comb2->setCantidad(20);
        $comb2->setActivo(true);
        $manager->persist($comb2);
        $p2->addCombinacione($comb2);
        
        $manager->persist($p2);

        // Producto 3: Lubricante Durex Fresa
        $p3 = new Producto();
        $p3->setNombre('Lubricante Durex Fresa');
        $p3->setDescripcionGeneral('Gel íntimo con sabor a fresa. A base de agua, hipoalergénico y seguro para usar con juguetes. Bote de 50ml. Proporciona una sensación suave y placentera.');
        $p3->setPrecio('12.99');
        $p3->setImagenUrl('/uploads/productos/Lubricante-Intimo-Durex-Fresa-Gel-50Ml-69a03043e38cf.jpg');
        $p3->setActivo(true);
        $p3->setCategoria($categorias[self::CATEGORIA_LUBRICANTES_REFERENCE]);
        
        $comb3 = new ProductoCombinacion();
        $comb3->setProducto($p3);
        $comb3->setSku('LUBRI-001');
        $comb3->setPrecioEspecifico('12.99');
        $comb3->setCantidad(50);
        $comb3->setActivo(true);
        $manager->persist($comb3);
        $p3->addCombinacione($comb3);
        
        $manager->persist($p3);

        // Producto 4: Silicona Premium
        $p4 = new Producto();
        $p4->setNombre('Lubricante Silicona Premium');
        $p4->setDescripcionGeneral('Lubricante de silicona de larga duración. Proporciona una lubricación superior, es resistente al agua y compatible con la mayoría de juguetes. 100ml de puro lujo.');
        $p4->setPrecio('18.99');
        $p4->setImagenUrl('/uploads/productos/silicona-69a0374ae207c.png');
        $p4->setActivo(true);
        $p4->setCategoria($categorias[self::CATEGORIA_LUBRICANTES_REFERENCE]);
        
        $comb4 = new ProductoCombinacion();
        $comb4->setProducto($p4);
        $comb4->setSku('LUBRI-002');
        $comb4->setPrecioEspecifico('18.99');
        $comb4->setCantidad(30);
        $comb4->setActivo(true);
        $manager->persist($comb4);
        $p4->addCombinacione($comb4);
        
        $manager->persist($p4);

        // Producto 5: Esposas Suave
        $p5 = new Producto();
        $p5->setNombre('Esposas de Lujo Suave');
        $p5->setDescripcionGeneral('Esposas de tela suave con cierres de velcro ajustables. Perfectas para parejas que desean explorar juegos de rol. Cómodas y seguras.');
        $p5->setPrecio('24.99');
        $p5->setImagenUrl('/uploads/productos/esposas-69a0323a35b15.jpg');
        $p5->setActivo(true);
        $p5->setCategoria($categorias[self::CATEGORIA_ACCESORIOS_REFERENCE]);
        
        $comb5 = new ProductoCombinacion();
        $comb5->setProducto($p5);
        $comb5->setSku('ESPOSAS-001');
        $comb5->setPrecioEspecifico('24.99');
        $comb5->setCantidad(25);
        $comb5->setActivo(true);
        $manager->persist($comb5);
        $p5->addCombinacione($comb5);
        
        $manager->persist($p5);

        // Producto 6: Mambo
        $p6 = new Producto();
        $p6->setNombre('Mambo - Vibrador Compacto');
        $p6->setDescripcionGeneral('Vibrador compacto y discreto con forma ergonómica. Múltiples velocidades, silencioso y con batería larga duración. Ideal para parejas o exploración personal.');
        $p6->setPrecio('39.99');
        $p6->setImagenUrl('/uploads/productos/mambo-69a174c13a594.png');
        $p6->setActivo(true);
        $p6->setCategoria($categorias[self::CATEGORIA_JUGUETES_REFERENCE]);
        
        $comb6 = new ProductoCombinacion();
        $comb6->setProducto($p6);
        $comb6->setSku('MAMBO-001');
        $comb6->setPrecioEspecifico('39.99');
        $comb6->setCantidad(18);
        $comb6->setActivo(true);
        $manager->persist($comb6);
        $p6->addCombinacione($comb6);
        
        $manager->persist($p6);

        // Producto 7: Close-up Toy
        $p7 = new Producto();
        $p7->setNombre('Juguete Premium Realista');
        $p7->setDescripcionGeneral('Juguete realista de silicona suave y flexible. Diseñado ergonómicamente para máximo placer. Fácil de limpiar y sumergible.');
        $p7->setPrecio('59.99');
        $p7->setImagenUrl('/uploads/productos/close-up-sex-toy-69a02fe3e5314.jpg');
        $p7->setActivo(true);
        $p7->setCategoria($categorias[self::CATEGORIA_JUGUETES_REFERENCE]);
        
        $comb7 = new ProductoCombinacion();
        $comb7->setProducto($p7);
        $comb7->setSku('REALISTA-001');
        $comb7->setPrecioEspecifico('59.99');
        $comb7->setCantidad(12);
        $comb7->setActivo(true);
        $manager->persist($comb7);
        $p7->addCombinacione($comb7);
        
        $manager->persist($p7);

        // Producto 8: Lubricantes Variados
        $p8 = new Producto();
        $p8->setNombre('Kit de Lubricantes Variados');
        $p8->setDescripcionGeneral('Pack con diferentes tipos de lubricantes: agua, silicona y natural. Perfecto para explorar qué funciona mejor para ti. 3 botellas de 50ml cada una.');
        $p8->setPrecio('28.99');
        $p8->setImagenUrl('/uploads/productos/Lubricantes-y-geles-intimos-69a030efe8d17.jpg');
        $p8->setActivo(true);
        $p8->setCategoria($categorias[self::CATEGORIA_LUBRICANTES_REFERENCE]);
        
        $comb8 = new ProductoCombinacion();
        $comb8->setProducto($p8);
        $comb8->setSku('LUBRI-KIT-001');
        $comb8->setPrecioEspecifico('28.99');
        $comb8->setCantidad(40);
        $comb8->setActivo(true);
        $manager->persist($comb8);
        $p8->addCombinacione($comb8);
        
        $manager->persist($p8);
    }
}
