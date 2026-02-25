<?php

namespace App\Form;

use App\Entity\CombinacionValor;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\AtributoValor;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class CombinacionValorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('atributoValor', EntityType::class, [
                'class' => AtributoValor::class,
                'choice_label' => function(AtributoValor $valor) {
                    return $valor->getAtributo()->getNombre() . ': ' . $valor->getValor();
                },
                'placeholder' => 'Selecciona un valor de atributo',
                'label' => false,
                'attr' => [
                    'class' => 'w-full rounded-lg border border-border-dark bg-slate-900/50 px-4 py-2 text-slate-100',
                ],
                'constraints' => [
                    new Assert\NotNull(message: 'Debes seleccionar un valor'),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => CombinacionValor::class,
        ]);
    }
}
