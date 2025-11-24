import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formularz from './Formularz'
import Notatka from './Notatka'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
        axios.get("http://localhost:5173/table")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

  return (
    <>
      <Notatka data={data}/>
      <Formularz/>
    </>
  )
}

export default App;
