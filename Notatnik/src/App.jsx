import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formularz from './Formularz'
import Notatka from './Notatka'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Notatka/>
      <Formularz/>
    </>
  )
}

export default App;
