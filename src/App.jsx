import { useState } from 'react'
import Padre from './padrehijo/Padre'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Padre />
    </>
  )
}

export default App
