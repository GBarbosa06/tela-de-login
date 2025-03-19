import { useState } from 'react'
import Login from './components/Register'
import Logon from './components/Login'

function App() {

  return (
    <div className='bg-amber-600 w-screen min-h-screen flex'>
      <Login />
      <Logon />
      
    </div>
  )
}

export default App
