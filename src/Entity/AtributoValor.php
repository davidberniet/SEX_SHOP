<?php

namespace App\Entity;

use App\Repository\AtributoValorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AtributoValorRepository::class)]
class AtributoValor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $valor = null;

    #[ORM\ManyToOne(inversedBy: 'valores')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Atributo $atributo = null;

    /**
     * @var Collection<int, CombinacionValor>
     */
    #[ORM\OneToMany(targetEntity: CombinacionValor::class, mappedBy: 'valor')]
    private Collection $usoEnCombinaciones;

    public function __construct()
    {
        $this->usoEnCombinaciones = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValor(): ?string
    {
        return $this->valor;
    }

    public function setValor(string $valor): static
    {
        $this->valor = $valor;

        return $this;
    }

    public function getAtributo(): ?Atributo
    {
        return $this->atributo;
    }

    public function setAtributo(?Atributo $atributo): static
    {
        $this->atributo = $atributo;

        return $this;
    }

    /**
     * @return Collection<int, CombinacionValor>
     */
    public function getUsoEnCombinaciones(): Collection
    {
        return $this->usoEnCombinaciones;
    }

    public function addUsoEnCombinacione(CombinacionValor $usoEnCombinacione): static
    {
        if (!$this->usoEnCombinaciones->contains($usoEnCombinacione)) {
            $this->usoEnCombinaciones->add($usoEnCombinacione);
            $usoEnCombinacione->setValor($this);
        }

        return $this;
    }

    public function removeUsoEnCombinacione(CombinacionValor $usoEnCombinacione): static
    {
        if ($this->usoEnCombinaciones->removeElement($usoEnCombinacione)) {
            // set the owning side to null (unless already changed)
            if ($usoEnCombinacione->getValor() === $this) {
                $usoEnCombinacione->setValor(null);
            }
        }

        return $this;
    }
}
