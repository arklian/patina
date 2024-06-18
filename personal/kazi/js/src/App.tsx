import { useState } from 'react'
import './App.css'

const Display = ({ name }) => (
    <h1>{name}</h1>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodCLick = () => {
        setGood(good + 1)
    }

    const handleNeutralCLick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadCLick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Display name='give feedback'/>
            <Button handleClick={handleGoodCLick} text='good'/>
            <Button handleClick={handleNeutralCLick} text='neutral'/>
            <Button handleClick={handleBadCLick} text='bad'/>
            <Display name='statistics'/>
            <p>
                good {good}
            </p>
            <p>
                neutral {neutral}
            </p>
            <p>
                bad {bad}
            </p>
        </div>
    )
}

export default App
