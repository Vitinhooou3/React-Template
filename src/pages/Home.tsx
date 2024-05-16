import React, { useContext } from 'react'
import Label from '../components/label'
import InputRoot from '../components/input-root'
import InputText from '../components/input-text'
import Span from '../components/span'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Button from '../components/button'
import { AuthContext } from '../context/auth-context'
import { Form } from '../components/form'

function Home() {
  const formSchema = z.object({
    castracaoMachos: z.string().nonempty("Campo Obrigatório"),
    castracaoFemea: z.string().nonempty("Campo Obrigatório"),
    dataCastracao: z.date(),
    criacaoAbrigosMacho: z.string().nonempty("Campo Obrigatório"),
    abrigoMachos: z.string().nonempty("Campo Obrigatório"),
    abrigoFemeas: z.string().nonempty("Campo Obrigatório")
  })
  const { handleSubmit, formState: { errors }, register, setValue } = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
    }
  );

  return (
    <section className='flex flex-col gap-6 h-screen w-full justify-center items-center bg-gradient-to-b from-zinc-100 to-zinc-50'>
      <h1 className='font-bold'>Registre os dados das tratativas</h1>
      <div className='flex flex-col w-90 first-letter:h-86 items-center bg-slate-700 p-9 rounded shadow'>
        <Form variation='default' onSubmit={handleSubmit}>
          <InputRoot>
            <Label>Castração Fêmea</Label>
            <InputText variation='default' {...register('castracaoFemea')}></InputText>
            <Span variation='default' children={undefined}></Span>
          </InputRoot>

          <InputRoot>
            <Label>Castração Macho</Label>
            <InputText variation='default' {...register('castracaoMachos')}></InputText>
            <Span variation='default' children={undefined}></Span>
          </InputRoot>
          
          <InputRoot>
            <Label>Data da Castração</Label>
            <InputText variation='default' {...register('dataCastracao')}></InputText>
            <Span variation='default' children={undefined}></Span>
          </InputRoot>
          
          <InputRoot>
            <Label>Construção de abrigos p/ macho - Quantidade</Label>
            <InputText variation='default' {...register('abrigoMachos')}></InputText>
            <Span variation='default' children={undefined}></Span>
          </InputRoot>
          
          <InputRoot>
            <Label>Construção de abrigos p/ fêmea - Quantidade</Label>
            <InputText variation='default' {...register('abrigoFemeas')}></InputText>
            <Span variation='default' children={undefined}></Span>
          </InputRoot>
        </Form>
        <Button variation='default'>Terminar Questionário</Button>
      </div>
    </section>
  )
}

export default Home