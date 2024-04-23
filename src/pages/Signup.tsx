import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupService } from './../services/SignupService';
import {Button} from '../components/Button'
import Input from '../components/Input';
import { Form } from '../components/Form';
import { Link } from 'react-router-dom';

function Signup() {
    const [loginLoading, setLoginLoding] = useState(false)
    const [signUpSuccefull, setSignUpSuccefull] = useState(false)
    const signupService = new SignupService()
    const formSchema = z.object({
        email: z.string().nonempty("Campo Obrigatório").email("E-mail Inválido"),
        password: z.string().nonempty("Campo Obrigatório"),
        passwordConfirm: z.string().nonempty("Campo Obrigatório")
    })
    const { handleSubmit, formState: { errors }, register } = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
        }
    );

    function handleSingup(data) {
        setLoginLoding(true)
        signupService.signupPost(data)
            .then(() => {
                setLoginLoding(false)
                setSignUpSuccefull(true)
            })
            .catch(() => {
                setLoginLoding(false)
            })
    }

    return (
        <section className=' flex flex-col gap-6 h-screen w-full justify-center items-center bg-gradient-to-b from-zinc-100 to-zinc-50'>
        <h1 className='items-center text-xl font-bold'>Entre no Jogo</h1>
        <div className='flex flex-col w-96 h-86 items-center bg-white p-9 rounded shadow'>
          <Form variation='default'>
  
            <Input.Root>
              <Input.Label>Nome</Input.Label>
              <Input.Text variation='default'></Input.Text>
            </Input.Root>

            
            <Input.Root>
              <Input.Label>RA</Input.Label>
              <Input.Text variation='default'></Input.Text>
            </Input.Root>

            <Input.Root>
              <Input.Label>E-mail</Input.Label>
              <Input.Text variation='default'></Input.Text>
            </Input.Root>

            <Input.Root>
              <Input.Label>Senha</Input.Label>
              <Input.Text variation='default'></Input.Text>
            </Input.Root>

            <Input.Root>
              <Input.Label>Confirmar Senha</Input.Label>
              <Input.Text variation='default'></Input.Text>
            </Input.Root>
  
            <Button variation='default'>Cadastrar</Button>
          </Form>
        </div>
            <div className='flex flex-col justify-between'>
              <Link to='/login' className='text-blue-700 float-right'>Já possui uma conta? Clique aqui!</Link>
            </div>
      </section>
    )
}

export default Signup