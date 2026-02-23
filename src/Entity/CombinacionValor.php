<?php

namespace App\Entity;

use App\Repository\CombinacionValorRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CombinacionValorRepository::class)]
class CombinacionValor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $notas = null;

    #[ORM\ManyToOne(inversedBy: 'valoresCombinacion')]
    #[ORM\JoinColumn(nullable: false)]
    private ?ProductoCombinacion $combinacion = null;

    #[ORM\ManyToOne(inversedBy: 'usoEnCombinaciones')]
    #[ORM\JoinColumn(nullable: false)]
    private ?AtributoValor $valor = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNotas(): ?string
    {
        return $this->notas;
    }

    public function setNotas(?string $notas): static
    {
        $this->notas = $notas;

        return $this;
    }

    public function getCombinacion(): ?ProductoCombinacion
    {
        return $this->combinacion;
    }

    public function setCombinacion(?ProductoCombinacion $combinacion): static
    {
        $this->combinacion = $combinacion;

        return $this;
    }

    public function getValor(): ?AtributoValor
    {
        return $this->valor;
    }

    public function setValor(?AtributoValor $valor): static
    {
        $this->valor = $valor;

        return $this;
    }
}
