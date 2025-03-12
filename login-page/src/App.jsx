import { useState } from 'react'
import Login from './components/Login'
import Logon from './components/Logon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-amber-600 w-screen min-h-screen flex'>
      <Login />
      <Logon />
      
    </div>
  )
}

export default App
