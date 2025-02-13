import { useState } from 'react'
import './App.css'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'

function App() {
  const [game, setGame] = useState(new Chess());

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <Chessboard id="main-board" />
      </div>
    </>
  )
}

export default App
