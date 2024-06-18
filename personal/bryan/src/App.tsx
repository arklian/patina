import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(2)
  const [count2, setCount2] = useState(2)
  const [count3, setCount3] = useState(2)
  return (
      <>
          <h1>Mathematical Form</h1>
          <div className="thing">
              <button onClick={() => setCount2((count2: number) => count + count2)}>
                  count2 is {count2} and {count2 / count}
              </button>
          </div>
          <div className="thing2">
              <button onClick={() => setCount3((count3: number) => count3 + count + count2)}>
                  count3 is {count3} and {count3 / (count+count2)}
              </button>
          </div>
          <div className="card">
              <button onClick={() => setCount((count: number) => count2 + count)}>
                  count is {count} and {count / count2}
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
