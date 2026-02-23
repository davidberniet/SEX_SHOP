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

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    private ?string $precio = null;

    #[ORM\Column]
    private ?int $stock = null;

    #[ORM\ManyToOne(inversedBy: 'combinaciones')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Producto $producto = null;

    /**
     * @var Collection<int, CombinacionValor>
     */
    #[ORM\OneToMany(targetEntity: CombinacionValor::class, mappedBy: 'combinacion', orphanRemoval: true)]
    private Collection $valoresCombinacion;

    public function __construct()
    {
        $this->valoresCombinacion = new ArrayCollection();
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

    public function getPrecio(): ?string
    {
        return $this->precio;
    }

    public function setPrecio(string $precio): static
    {
        $this->precio = $precio;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): static
    {
        $this->stock = $stock;

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
    public function getValoresCombinacion(): Collection
    {
        return $this->valoresCombinacion;
    }

    public function addValoresCombinacion(CombinacionValor $valoresCombinacion): static
    {
        if (!$this->valoresCombinacion->contains($valoresCombinacion)) {
            $this->valoresCombinacion->add($valoresCombinacion);
            $valoresCombinacion->setCombinacion($this);
        }

        return $this;
    }

    public function removeValoresCombinacion(CombinacionValor $valoresCombinacion): static
    {
        if ($this->valoresCombinacion->removeElement($valoresCombinacion)) {
            // set the owning side to null (unless already changed)
            if ($valoresCombinacion->getCombinacion() === $this) {
                $valoresCombinacion->setCombinacion(null);
            }
        }

        return $this;
    }

    /**
     * Verifica si hay stock disponible
     */
    public function tieneStock(): bool
    {
        return $this->stock > 0;
    }

    /**
     * Reduce el stock de inventario
     */
    public function reducirStock(int $cantidad = 1): bool
    {
        if ($this->stock >= $cantidad) {
            $this->stock -= $cantidad;
            return true;
        }
        return false;
    }

    /**
     * Incrementa el stock (devoluciones, etc)
     */
    public function incrementarStock(int $cantidad = 1): void
    {
        $this->stock += $cantidad;
    }

    /**
     * Obtiene la descripción de la combinación (ej: "Rojo - Talla M")
     */
    public function getDescripcion(): string
    {
        $valores = $this->valoresCombinacion
            ->map(fn(CombinacionValor $v) => $v->getValor())
            ->toArray();
        
        return implode(' - ', $valores) ?: 'Combinación ' . $this->id;
    }
}
