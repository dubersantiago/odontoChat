import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl text-amber-700 w-full text-center mt-2'>titulo de prueba con jenkins {count}</h1>
      <div className='w-full flex justify-center aling-items-center gap-4 mt-4'>
        <button className='bg-cyan-500 rounded-2xl hover: cursor-pointer p-2' onClick={() => setCount(count + 1)}>Incrementar</button>
        <button className='bg-cyan-500 rounded-2xl hover: cursor-pointer p-2' onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
    </>
  )
}

export default App
