<?php

namespace App\Form;

use App\Entity\ProductoCombinacion;
use App\Entity\CombinacionValor;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class ProductoCombinacionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('sku', TextType::class, [
                'label' => 'SKU (Código Único)',
                'attr' => ['placeholder' => 'Ej: SKU-ROJO-M'],
                'constraints' => [
                    new Assert\NotBlank(message: 'El SKU es obligatorio'),
                    new Assert\Length(min: 3, max: 100),
                ],
            ])
            ->add('precioEspecifico', MoneyType::class, [
                'label' => 'Precio Especial (opcional)',
                'currency' => 'EUR',
                'required' => false,
                'attr' => ['placeholder' => 'Dejar vacío para usar precio del producto'],
                'constraints' => [
                    new Assert\GreaterThan(value: 0, message: 'El precio debe ser mayor a 0'),
                ],
            ])
            ->add('cantidad', IntegerType::class, [
                'label' => 'Stock Disponible',
                'attr' => ['placeholder' => 'Cantidad en inventario'],
                'constraints' => [
                    new Assert\NotBlank(message: 'La cantidad es obligatoria'),
                    new Assert\GreaterThanOrEqual(value: 0, message: 'El stock no puede ser negativo'),
                ],
            ])
            ->add('activo', CheckboxType::class, [
                'label' => 'Variación Activa',
                'required' => false,
                'attr' => ['class' => 'rounded border-border-dark bg-slate-900/50 text-primary focus:ring-primary/20'],
            ])
            ->add('combinacionValores', CollectionType::class, [
                'entry_type' => CombinacionValorType::class,
                'entry_options' => ['label' => false],
                'label' => 'Valores de Atributos',
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProductoCombinacion::class,
        ]);
    }
}