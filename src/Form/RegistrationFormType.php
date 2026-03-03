<?php

namespace App\Form;

use App\Entity\Cliente;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\LessThanOrEqual;
use Symfony\Component\Validator\Constraints\GreaterThanOrEqual;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nombre', \Symfony\Component\Form\Extension\Core\Type\TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'Por favor, introduce tu nombre'),
                    new Length(
                        min: 3,
                        minMessage: 'El nombre debe tener al menos {{ limit }} caracteres'
                    ),
                ],
            ])
            ->add('fechaNacimiento', \Symfony\Component\Form\Extension\Core\Type\DateType::class, [
                'widget' => 'single_text',
                'constraints' => [
                    new NotBlank(message: 'Por favor, introduce tu fecha de nacimiento'),
                    new LessThanOrEqual(
                        value: '-18 years',
                        message: 'Debes ser mayor de 18 años para registrarte'
                    ),
                ],
            ])
            ->add('nifCif', \Symfony\Component\Form\Extension\Core\Type\TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'Por favor, introduce tu DNI, NIE o CIF'),
                    new Regex(
                        pattern: '/^[0-9X][0-9]{7}[A-Z]$|^[KLMXYZ][0-9]{7}[A-Z]$/',
                        message: 'Formato de DNI/NIE/CIF no válido. Ej: 12345678A'
                    ),
                ],
            ])
            ->add('email', \Symfony\Component\Form\Extension\Core\Type\EmailType::class, [
                'constraints' => [
                    new NotBlank(message: 'Por favor, introduce tu email'),
                    new Email(message: 'Por favor, introduce un email válido'),
                ],
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'constraints' => [
                    new IsTrue(
                        message: 'Debes aceptar los términos y condiciones para continuar.',
                    ),
                ],
            ])
            ->add('plainPassword', PasswordType::class, [
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank(
                        message: 'Por favor, introduce una contraseña',
                    ),
                    new Length(
                        min: 8,
                        minMessage: 'Tu contraseña debe tener al menos {{ limit }} caracteres',
                        max: 4096,
                    ),
                    new Regex(
                        pattern: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/',
                        message: 'La contraseña debe contener mayúsculas, minúsculas y números'
                    ),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Cliente::class,
        ]);
    }
}
