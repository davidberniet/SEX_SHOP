<?php

namespace App\Entity;

use App\Repository\ProductoCombinacionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductoCombinacionRepository::class)]
class ProductoCombinacion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $sku = null;

    // Recuperado: precioEspecifico (ahora permite null)
    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, nullable: true)]
    private ?string $precioEspecifico = null;

    // Recuperado: cantidad
    #[ORM\Column]
    private ?int $cantidad = null;

    // Recuperado: activo (por defecto a true)
    #[ORM\Column (nullable: true, options: ['default' => true])]
    private ?bool $activo = true;

    #[ORM\ManyToOne(inversedBy: 'combinaciones')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Producto $producto = null;

    // Recuperado: combinacionValores
    /**
     * @var Collection<int, CombinacionValor>
     */
    #[ORM\OneToMany(targetEntity: CombinacionValor::class, mappedBy: 'combinacion', orphanRemoval: true, cascade: ['persist'])]
    private Collection $combinacionValores;

    public function __construct()
    {
        $this->combinacionValores = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSku(): ?string
    {
        return $this->sku;
    }

    public function setSku(string $sku): static
    {
        $this->sku = $sku;
        return $this;
    }

    public function getPrecioEspecifico(): ?string
    {
        return $this->precioEspecifico;
    }

    public function setPrecioEspecifico(?string $precioEspecifico): static
    {
        $this->precioEspecifico = $precioEspecifico;
        return $this;
    }

    public function getCantidad(): ?int
    {
        return $this->cantidad;
    }

    public function setCantidad(int $cantidad): static
    {
        $this->cantidad = $cantidad;
        return $this;
    }

    public function getActivo(): ?bool
    {
        return $this->activo;
    }

    public function setActivo(bool $activo): static
    {
        $this->activo = $activo;
        return $this;
    }

    public function getProducto(): ?Producto
    {
        return $this->producto;
    }

    public function setProducto(?Producto $producto): static
    {
        $this->producto = $producto;
        return $this;
    }

    /**
     * @return Collection<int, CombinacionValor>
     */
    public function getCombinacionValores(): Collection
    {
        return $this->combinacionValores;
    }

    public function addCombinacionValor(CombinacionValor $combinacionValor): static
    {
        if (!$this->combinacionValores->contains($combinacionValor)) {
            $this->combinacionValores->add($combinacionValor);
            $combinacionValor->setCombinacion($this);
        }

        return $this;
    }

    public function removeCombinacionValor(CombinacionValor $combinacionValor): static
    {
        if ($this->combinacionValores->removeElement($combinacionValor)) {
            if ($combinacionValor->getCombinacion() === $this) {
                $combinacionValor->setCombinacion(null);
            }
        }

        return $this;
    }

    public function tieneStock(): bool
    {
        return $this->cantidad > 0;
    }

    public function reducirStock(int $cant = 1): bool
    {
        if ($this->cantidad >= $cant) {
            $this->cantidad -= $cant;
            return true;
        }
        return false;
    }

    public function incrementarStock(int $cant = 1): void
    {
        $this->cantidad += $cant;
    }

    public function getDescripcion(): string
    {
        $valores = $this->combinacionValores
            ->map(fn(CombinacionValor $v) => $v->getValor())
            ->toArray();
        
        return implode(' - ', $valores) ?: 'Combinación ' . $this->id;
    }
}