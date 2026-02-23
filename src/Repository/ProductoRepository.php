<?php

namespace App\Repository;

use App\Entity\Producto;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Producto>
 */
class ProductoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Producto::class);
    }

    /**
     * Buscar productos por nombre
     */
    public function findByNombre(string $nombre): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.nombre LIKE :nombre')
            ->setParameter('nombre', '%' . $nombre . '%')
            ->andWhere('p.activo = true')
            ->orderBy('p.nombre', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Buscar productos por categoría
     */
    public function findByCategoria($categoriaId, bool $soloActivos = true): array
    {
        $qb = $this->createQueryBuilder('p')
            ->andWhere('p.categoria = :categoria')
            ->setParameter('categoria', $categoriaId)
            ->orderBy('p.nombre', 'ASC');

        if ($soloActivos) {
            $qb->andWhere('p.activo = true');
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Buscar productos dentro de un rango de precios
     */
    public function findByPriceRange(float $minPrice, float $maxPrice, bool $soloActivos = true): array
    {
        $qb = $this->createQueryBuilder('p')
            ->andWhere('p.precio >= :minPrice')
            ->andWhere('p.precio <= :maxPrice')
            ->setParameter('minPrice', $minPrice)
            ->setParameter('maxPrice', $maxPrice)
            ->orderBy('p.precio', 'ASC');

        if ($soloActivos) {
            $qb->andWhere('p.activo = true');
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Búsqueda avanzada con múltiples criterios
     */
    public function search(array $criteria): array
    {
        $qb = $this->createQueryBuilder('p');

        // Búsqueda por nombre
        if (!empty($criteria['nombre'])) {
            $qb->andWhere('p.nombre LIKE :nombre')
               ->setParameter('nombre', '%' . $criteria['nombre'] . '%');
        }

        // Filtro por categoría
        if (!empty($criteria['categoria'])) {
            $qb->andWhere('p.categoria = :categoria')
               ->setParameter('categoria', $criteria['categoria']);
        }

        // Filtro por rango de precio
        if (!empty($criteria['minPrice'])) {
            $qb->andWhere('p.precio >= :minPrice')
               ->setParameter('minPrice', $criteria['minPrice']);
        }

        if (!empty($criteria['maxPrice'])) {
            $qb->andWhere('p.precio <= :maxPrice')
               ->setParameter('maxPrice', $criteria['maxPrice']);
        }

        // Filtro por estado
        if (isset($criteria['activo'])) {
            $qb->andWhere('p.activo = :activo')
               ->setParameter('activo', $criteria['activo']);
        } else {
            // Por defecto mostrar solo activos
            $qb->andWhere('p.activo = true');
        }

        // Ordenamiento
        $orderBy = $criteria['orderBy'] ?? 'nombre';
        $orderDir = $criteria['orderDir'] ?? 'ASC';
        $qb->orderBy('p.' . $orderBy, $orderDir);

        return $qb->getQuery()->getResult();
    }

    /**
     * Obtener productos activos
     */
    public function findActivos(int $limit = null): array
    {
        $qb = $this->createQueryBuilder('p')
            ->andWhere('p.activo = true')
            ->orderBy('p.nombre', 'ASC');

        if ($limit) {
            $qb->setMaxResults($limit);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Productos relacionados (misma categoría, excluyendo el actual)
     */
    public function findRelacionados(Producto $producto, int $limit = 4): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.categoria = :categoria')
            ->andWhere('p.id != :id')
            ->andWhere('p.activo = true')
            ->setParameter('categoria', $producto->getCategoria())
            ->setParameter('id', $producto->getId())
            ->orderBy('p.nombre', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
