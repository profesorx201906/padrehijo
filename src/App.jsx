import { useState } from 'react'
import AppCriptos from './ejemplocriptos/AppCriptos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppCriptos />
    </>
  )
}

export default App
