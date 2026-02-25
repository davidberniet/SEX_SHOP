<?php

namespace App\Form;

use App\Entity\Direccion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DireccionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('tipo', ChoiceType::class, [
                'choices' => [
                    'Casa' => 'Casa',
                    'Trabajo' => 'Trabajo',
                    'A Punto de recogida' => 'Punto de Recogida'
                ],
                'label' => 'Tipo de dirección',
                'attr' => ['class' => 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm']
            ])
            ->add('calle', TextType::class, [
                'label' => 'Calle y número',
                'attr' => ['class' => 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm', 'placeholder' => 'Ej. C/ Falsa 123, Puerta 4']
            ])
            ->add('ciudad', TextType::class, [
                'label' => 'Ciudad',
                'attr' => ['class' => 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm']
            ])
            ->add('codigaPostal', TextType::class, [ // El nombre es con "a" por la entidad
                'label' => 'Código Postal',
                'attr' => ['class' => 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Direccion::class,
        ]);
    }
}
