import { useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [registerPage, setRegisterPage] = useState(true)
  return (
    <div className='bg-neutral-800 w-screen min-h-screen flex justify-center items-center'>
      
    {/* <Register />

    <Login /> */}
     
      
    </div>
  )
}

export default App
