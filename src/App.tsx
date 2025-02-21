import { useState } from 'react'
import './App.css'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'

function App() {
  const [game, setGame] = useState(new Chess());

  return (
    <>
      <h1>Blunder Bot</h1>
      <div className='chessboard'>
        <Chessboard 
          id="main-board" 
        />
      </div>
    </>
  )
}

export default App
