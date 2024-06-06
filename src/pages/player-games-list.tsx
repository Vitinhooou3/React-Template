import React from 'react'
import Button from '../components/button'
import { Link, useNavigate } from 'react-router-dom'
import { MoveLeft } from 'lucide-react'
import { back } from '../context/auth-config'

function PlayerGamesList() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-6'> 
      <div className='flex gap-3 items-center jus'>
        <div className='rounded-full bg-zinc-200 w-fit p-1'>
          <Link to={back}>
            <MoveLeft className='w-5 h-5' />
          </Link>
        </div>
        <h1 className='font-semibold text-lg'>Jogos</h1>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 w-full h-full">
        <div className="flex gap-3 flex-col text-black flex-1 p-6 py-6 rounded-sm  bg-white shadow-lg ">
          <div className='flex gap-3'>
            <div className='font-semibold'>
              Turma:
            </div>
            <div>
              Biologia 6 Semestre
            </div>
          </div>
          <div className='flex gap-3'>
            <div className='font-semibold'>
              Data de Inicio:
            </div>
            <div>
              00/00/0000
            </div>
          </div>
          <Button onClick={() => navigate('/player-round-game')}>Entrar no jogo</Button>
          <Button onClick={() => navigate('/players-list')}>Ver placar de jogadores</Button>
        </div>
      </div>
    </div>
  )
}

export default PlayerGamesList