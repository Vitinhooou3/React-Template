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
    <section className=' flex h-screen w-full justify-center items-center bg-slate-500 '>
      <div className='flex w-96 h-96 items-center bg-slate-400 p-4'>

        <Form variation='default'>
          <h1 className='items-center'>Entre no Jogo</h1>
          <Input.Root >
            <Input.Label>Nome</Input.Label>
            <Input.Text variation='aaaa'></Input.Text>
          </Input.Root>

          <Input.Root>
            <Input.Label>E-mail</Input.Label>
            <Input.Text variation='aaaa'></Input.Text>
          </Input.Root>

          <Input.Root>
            <Input.Label>Senha</Input.Label>
            <Input.Text variation='aaaa'></Input.Text>
          </Input.Root>
          <div >
          <Input.Root>
            <Input.Label>oie</Input.Label>
            <input type='radio' value={'true'}></input>
          </Input.Root>
          </div>
          
          <Button variation='blue'>Entrar</Button>
        </Form>
      </div>
    </section>
  )
}

export default Login
