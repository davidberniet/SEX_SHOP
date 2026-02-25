<?php

namespace App\Form;

use App\Entity\Atributo;
use App\Entity\AtributoValor;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class AtributoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nombre', TextType::class, [
                'label' => 'Nombre del Atributo',
                'attr' => ['placeholder' => 'Ej: Color, Tamaño, Intensidad'],
                'constraints' => [
                    new Assert\NotBlank(message: 'El nombre es obligatorio'),
                    new Assert\Length(min: 2, max: 100),
                ],
            ])
            ->add('valores', CollectionType::class, [
                'entry_type' => AtributoValorType::class,
                'entry_options' => ['label' => false],
                'label' => 'Valores del Atributo',
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Atributo::class,
        ]);
    }
}
