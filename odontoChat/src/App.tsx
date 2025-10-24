import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl text-amber-700'>titulo de prueba con jenkins {count}</h1>
    </>
  )
}

export default App
