<?php

namespace App\Entity;

use App\Repository\AtributoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AtributoRepository::class)]
class Atributo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nombre = null;

    #[ORM\ManyToOne(inversedBy: 'atributos')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Producto $producto = null;

    /**
     * @var Collection<int, AtributoValor>
     */
    #[ORM\OneToMany(targetEntity: AtributoValor::class, mappedBy: 'atributo', orphanRemoval: true, cascade: ['persist'])]
    private Collection $valores;

    public function __construct()
    {
        $this->valores = new ArrayCollection();
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
     * @return Collection<int, AtributoValor>
     */
    public function getValores(): Collection
    {
        return $this->valores;
    }

    public function addValore(AtributoValor $valore): static
    {
        if (!$this->valores->contains($valore)) {
            $this->valores->add($valore);
            $valore->setAtributo($this);
        }

        return $this;
    }

    public function removeValore(AtributoValor $valore): static
    {
        if ($this->valores->removeElement($valore)) {
            // set the owning side to null (unless already changed)
            if ($valore->getAtributo() === $this) {
                $valore->setAtributo(null);
            }
        }

        return $this;
    }
}
