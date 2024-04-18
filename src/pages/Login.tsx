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

  const lista = [2,3]
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
    <section className=" h-screen w-96 item">
      <Form variation='teste'>
        <Input.Root >
          <Input.Label> Cossorro</Input.Label>
          <Input.Text variation='aaaa'></Input.Text>
        </Input.Root>
        <Button variation={'red'}>OIIIIIII</Button>
      </Form>

      <Dropdown.Menu>
        <Dropdown.Option variation='default' value={1} label='1'></Dropdown.Option>
      </Dropdown.Menu>
    </section>
  )
}

export default Login
