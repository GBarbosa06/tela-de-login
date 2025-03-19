import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'

function App() {

  return (
    <div className='bg-amber-600 w-screen min-h-screen flex'>
      <Register />
      <Login />
      
    </div>
  )
}

export default App
