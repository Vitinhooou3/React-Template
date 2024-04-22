import React, { useContext, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'
import { zodResolver } from "@hookform/resolvers/zod"
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import { Form } from '../components/Form'
import { Button } from '../components/Button'

function Login() {
  const [loginLoading, setLoginLoding] = useState(false)
  const formSchema = z.object({
    email: z.string().nonempty("Campo Obrigatório").email("E-Mail Inválido"),
    password: z.string().nonempty("Campo Obrigatório")
  })

  const lista = [2, 3]
  const { handleSubmit, formState: { errors }, register, setValue } = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
    }
  );
  const { signIn } = useContext(AuthContext)

  async function handleSingIn(data: any) {
    setLoginLoding(true)
    await signIn(data)
      .then(() => {
        setLoginLoding(false)
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
            <Input.Label>E-mail</Input.Label>
            <Input.Text variation='default'></Input.Text>
          </Input.Root>

          <Input.Root>
            <Input.Label>Senha</Input.Label>
            <Input.Text variation='default'></Input.Text>
          </Input.Root>
          
          <div className='flex justify-between'>
            <span> <input type="checkbox" value={'true'} className='border-none outline-none'/> Lembrar usuário</span>
            <a href='/home' className='text-blue-700 float-right'>Esqueceu a senha?</a>
          </div>

          <Button variation='default'>Entrar</Button>
        </Form>
      </div>
    </section>
  )
}

export default Login
