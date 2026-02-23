<?php

namespace App\Entity;

use App\Repository\PedidoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PedidoRepository::class)]
class Pedido
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTime $ffechaPedido = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    private ?string $total = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $dirEnvioSnapshot = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $dirFactSnapshot = null;

    #[ORM\Column]
    private ?bool $empaquetadoDiscreto = null;

    #[ORM\ManyToOne(inversedBy: 'pedidos')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Cliente $cliente = null;

    /**
     * @var Collection<int, DetallePedido>
     */
    #[ORM\OneToMany(targetEntity: DetallePedido::class, mappedBy: 'pedido', orphanRemoval: true)]
    private Collection $detalles;

    /**
     * @var Collection<int, Pago>
     */
    #[ORM\OneToMany(targetEntity: Pago::class, mappedBy: 'pedido')]
    private Collection $pagos;

    public function __construct()
    {
        $this->detalles = new ArrayCollection();
        $this->pagos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFfechaPedido(): ?\DateTime
    {
        return $this->ffechaPedido;
    }

    public function setFfechaPedido(\DateTime $ffechaPedido): static
    {
        $this->ffechaPedido = $ffechaPedido;

        return $this;
    }

    public function getTotal(): ?string
    {
        return $this->total;
    }

    public function setTotal(string $total): static
    {
        $this->total = $total;

        return $this;
    }

    public function getDirEnvioSnapshot(): ?string
    {
        return $this->dirEnvioSnapshot;
    }

    public function setDirEnvioSnapshot(string $dirEnvioSnapshot): static
    {
        $this->dirEnvioSnapshot = $dirEnvioSnapshot;

        return $this;
    }

    public function getDirFactSnapshot(): ?string
    {
        return $this->dirFactSnapshot;
    }

    public function setDirFactSnapshot(string $dirFactSnapshot): static
    {
        $this->dirFactSnapshot = $dirFactSnapshot;

        return $this;
    }

    public function isEmpaquetadoDiscreto(): ?bool
    {
        return $this->empaquetadoDiscreto;
    }

    public function setEmpaquetadoDiscreto(bool $empaquetadoDiscreto): static
    {
        $this->empaquetadoDiscreto = $empaquetadoDiscreto;

        return $this;
    }

    public function getCliente(): ?Cliente
    {
        return $this->cliente;
    }

    public function setCliente(?Cliente $cliente): static
    {
        $this->cliente = $cliente;

        return $this;
    }

    /**
     * @return Collection<int, DetallePedido>
     */
    public function getDetalles(): Collection
    {
        return $this->detalles;
    }

    public function addDetalle(DetallePedido $detalle): static
    {
        if (!$this->detalles->contains($detalle)) {
            $this->detalles->add($detalle);
            $detalle->setPedido($this);
        }

        return $this;
    }

    public function removeDetalle(DetallePedido $detalle): static
    {
        if ($this->detalles->removeElement($detalle)) {
            // set the owning side to null (unless already changed)
            if ($detalle->getPedido() === $this) {
                $detalle->setPedido(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Pago>
     */
    public function getPagos(): Collection
    {
        return $this->pagos;
    }

    public function addPago(Pago $pago): static
    {
        if (!$this->pagos->contains($pago)) {
            $this->pagos->add($pago);
            $pago->setPedido($this);
        }

        return $this;
    }

    public function removePago(Pago $pago): static
    {
        if ($this->pagos->removeElement($pago)) {
            // set the owning side to null (unless already changed)
            if ($pago->getPedido() === $this) {
                $pago->setPedido(null);
            }
        }

        return $this;
    }
}
