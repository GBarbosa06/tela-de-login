import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-amber-600 w-screen min-h-screen flex'>
      <div className='bg-neutral-500 w-screen min-h-screen flex'></div>
      <div className='bg-amber-600 w-screen min-h-screen flex'></div>
    </div>
  )
}

export default App
