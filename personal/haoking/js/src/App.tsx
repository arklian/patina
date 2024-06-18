import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (params) => {
    console.log(params)
    return (
        <div>
            <p>Hello {params.field1} you are {params.field2}</p>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div>
                custom footer by me!
            </div>
        </>
    )
}

function App() {
  const [count, setCount] = useState(0)
    const now = new Date()

    console.log("hello from console")
    console.log(now)

    const name:string = 'johnathan'
    const age:number = 26

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <div>
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
          </div>
            <div>
                <button onClick={() => alert("saoifj")}> click </button>
            </div>
          <div>
              <p>hello wolrd it is now {now.toString()}</p>
          </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <h1> Greetings </h1>
        <Hello field1='george'field2={26+36} />
        <Hello field1='john' field2={16*2}/>
        <Hello field1={name} field2={age} />
        <Footer/>
    </>
  )
}

export default App
