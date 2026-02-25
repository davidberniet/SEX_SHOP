<?php

namespace App\Form;

use App\Entity\AtributoValor;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class AtributoValorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('valor', TextType::class, [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Ej: Rojo, Grande, Alta',
                    'class' => 'w-full rounded-lg border border-border-dark bg-slate-900/50 px-4 py-2 text-slate-100',
                ],
                'constraints' => [
                    new Assert\NotBlank(message: 'El valor es obligatorio'),
                    new Assert\Length(min: 1, max: 100),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AtributoValor::class,
        ]);
    }
}
