import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import { MoveLeft } from 'lucide-react'
import { back } from '../context/auth-config'

function PlayerRoundStats() {
  return (
    <div className='flex flex-col gap-6 h-full '>
      <div className='flex gap-3 items-center jus'>
        <div className='rounded-full bg-zinc-200 w-fit p-1'>
          <Link to={'/player-game-list'}>
            <MoveLeft className='w-5 h-5' />
          </Link>
        </div>
        <h1 className='font-semibold text-lg'>Ano 1</h1>
      </div>
      <div className='h-full w-full flex items-center justify-center'>
        <div className='flex gap-3 flex-col w-fit first-letter:h-86 items-center bg-white p-9 rounded shadow-lg'>
          <div className='rounded p-3 bg-zinc-200'>
            O grafico deveria estar aqui
          </div>
          <Button>
            <Link className='flex-1' to="/player-round-game">Ir para proxima rodada</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PlayerRoundStats