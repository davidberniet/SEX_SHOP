<?php

namespace App\Entity;

use App\Repository\ProductoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductoRepository::class)]
class Producto
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nombre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descripcionGeneral = null;

    #[ORM\Column]
    private ?bool $activo = null;

    #[ORM\ManyToOne(inversedBy: 'productos')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Categoria $categoria = null;

    /**
     * @var Collection<int, Atributo>
     */
    #[ORM\OneToMany(targetEntity: Atributo::class, mappedBy: 'producto', orphanRemoval: true)]
    private Collection $atributos;

    /**
     * @var Collection<int, ProductoCombinacion>
     */
    #[ORM\OneToMany(targetEntity: ProductoCombinacion::class, mappedBy: 'producto', orphanRemoval: true)]
    private Collection $combinaciones;

    public function __construct()
    {
        $this->atributos = new ArrayCollection();
        $this->combinaciones = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): static
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getDescripcionGeneral(): ?string
    {
        return $this->descripcionGeneral;
    }

    public function setDescripcionGeneral(?string $descripcionGeneral): static
    {
        $this->descripcionGeneral = $descripcionGeneral;

        return $this;
    }

    public function isActivo(): ?bool
    {
        return $this->activo;
    }

    public function setActivo(bool $activo): static
    {
        $this->activo = $activo;

        return $this;
    }

    public function getCategoria(): ?Categoria
    {
        return $this->categoria;
    }

    public function setCategoria(?Categoria $categoria): static
    {
        $this->categoria = $categoria;

        return $this;
    }

    /**
     * @return Collection<int, Atributo>
     */
    public function getAtributos(): Collection
    {
        return $this->atributos;
    }

    public function addAtributo(Atributo $atributo): static
    {
        if (!$this->atributos->contains($atributo)) {
            $this->atributos->add($atributo);
            $atributo->setProducto($this);
        }

        return $this;
    }

    public function removeAtributo(Atributo $atributo): static
    {
        if ($this->atributos->removeElement($atributo)) {
            // set the owning side to null (unless already changed)
            if ($atributo->getProducto() === $this) {
                $atributo->setProducto(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ProductoCombinacion>
     */
    public function getCombinaciones(): Collection
    {
        return $this->combinaciones;
    }

    public function addCombinacione(ProductoCombinacion $combinacione): static
    {
        if (!$this->combinaciones->contains($combinacione)) {
            $this->combinaciones->add($combinacione);
            $combinacione->setProducto($this);
        }

        return $this;
    }

    public function removeCombinacione(ProductoCombinacion $combinacione): static
    {
        if ($this->combinaciones->removeElement($combinacione)) {
            // set the owning side to null (unless already changed)
            if ($combinacione->getProducto() === $this) {
                $combinacione->setProducto(null);
            }
        }

        return $this;
    }

    public function getPrecio(): string
    {
        $primeraCombinacion = $this->combinaciones->first();
        return $primeraCombinacion ? (string) $primeraCombinacion->getPrecio() : '0.00';
    }
}
