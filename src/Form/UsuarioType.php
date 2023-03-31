<?php

namespace App\Form;

use App\Entity\Usuario;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
class UsuarioType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('nombre')
            ->add('apellido')
            ->add('cedula')
            ->add('roles', ChoiceType::class, [
                'mapped' => false,
                'choices' => [
                    'ROLE_SECRETARIA' => 'ROLE_SECRETARIA',
                    'ROLE_REPARTIDOR' => 'ROLE_REPARTIDOR',                    
                ], 'attr' => ['class' => 'form-select']
            ])
            ->add('clave')
            ->add('estado');
    }
 function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Usuario::class,
        ]);
    }
}
