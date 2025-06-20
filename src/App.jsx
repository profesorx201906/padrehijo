import { useState } from 'react'
import Padre from './padrehijo/Padre'
import AppPersonaje from './ejemplopractico/AppPersonaje'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppPersonaje />
    </>
  )
}

export default App
