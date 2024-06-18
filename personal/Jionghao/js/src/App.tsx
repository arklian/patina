import { useState } from 'react'
import './App.css'

const Hello = () => {
    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}


function App() {
  const [count, setCount] = useState(0)
    const now = new Date()
    const a = 10
    const b = 20
    console.log(now, a+b)
  return (

    <>
      <h1>Vite + React</h1>
      <Hello />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
