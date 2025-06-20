import { useState } from 'react'
import AppPokemons from './ejemploPokemon/AppPokemons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppPokemons />
    </>
  )
}

export default App
