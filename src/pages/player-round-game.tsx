import React, { useContext } from 'react'
import Label from '../components/label'
import InputRoot from '../components/input-root'
import InputText from '../components/input-text'
import Span from '../components/span'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Button from '../components/button'
import { Form } from '../components/form'
import { Link, useNavigate } from 'react-router-dom'
import Content from '../components/content'
import { MoveLeft } from 'lucide-react'
import { back } from '../context/auth-config'

function PlayerRoundGame() {
  const navigate = useNavigate()
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

  function handleSendPlay(data) {

  }

  return (
    <div className='flex flex-col gap-6 '>
      <div className='flex gap-3 items-center jus'>
        <div className='rounded-full bg-zinc-200 w-fit p-1'>
          <Link to={'/player-game-list'}>
            <MoveLeft className='w-5 h-5' />
          </Link>
        </div>
        <h1 className='font-semibold text-lg'>Ano 1</h1>
      </div>
      <div className='flex items-center h-full justify-center'>
        <div className='max-w-xs p-6 shadow bg-white rounded'>
          <Form variation='default' onSubmit={
            // handleSubmit(handleSendPlay)
            // trocar pelo codigo comentado acima na hora de implemetar
            () => navigate("/player-round-stats")
          }>
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
            <Button variation='default'>Enviar Jogada</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default PlayerRoundGame