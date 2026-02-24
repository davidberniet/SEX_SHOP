<?php

namespace App\Form;

use App\Entity\Categoria;
use App\Entity\Producto;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;

class ProductoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nombre', TextType::class, [
                'label' => 'Nombre del Producto',
                'attr' => ['placeholder' => 'Ej: Vibrador de Lujo'],
                'constraints' => [
                    new Assert\NotBlank(message: 'El nombre es obligatorio'),
                    new Assert\Length(min: 3, max: 255),
                ],
            ])
            ->add('descripcionGeneral', TextareaType::class, [
                'label' => 'Descripción General',
                'required' => false,
                'attr' => ['placeholder' => 'Describe el producto en detalle...', 'rows' => 4],
                'constraints' => [
                    new Assert\Length(max: 5000),
                ],
            ])
            ->add('precio', MoneyType::class, [
                'label' => 'Precio Base',
                'currency' => 'EUR',
                'attr' => ['placeholder' => '0.00'],
                'constraints' => [
                    new Assert\NotBlank(message: 'El precio es obligatorio'),
                    new Assert\Positive(message: 'El precio debe ser mayor a 0'),
                ],
            ])
            ->add('imagenUrl', FileType::class, [
                'label' => 'Subir Imagen',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    // ¡OJO AQUÍ! Sin corchetes [] y usando dos puntos :
                    new File(
                        maxSize: '2M',
                        mimeTypes: [
                            'image/jpeg',
                            'image/png',
                            'image/webp',
                        ],
                        mimeTypesMessage: 'Por favor, sube una imagen válida (JPEG, PNG o WEBP)'
                    )
                ],
            ])
            ->add('categoria', EntityType::class, [
                'label' => 'Categoría',
                'class' => Categoria::class,
                'choice_label' => 'nombre',
                'placeholder' => 'Selecciona una categoría',
                'constraints' => [
                    new Assert\NotNull(message: 'Debes seleccionar una categoría'),
                ],
            ])
            ->add('activo', CheckboxType::class, [
                'label' => 'Producto Activo',
                'required' => false,
            ])
            ->add('atributos', CollectionType::class, [
                'entry_type' => AtributoType::class,
                'entry_options' => ['label' => false],
                'label' => 'Atributos',
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Producto::class,
        ]);
    }
}
