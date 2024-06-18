import { useState } from 'react'

const Header = (props) => {
    console.log(props)

    return (
        <div>
            <h1>
                {props.text}
            </h1>
        </div>
    )
}

const Button = (props) => {
    console.log(props)
    const { handleClick, text } = props
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Stats = (props) => {
    console.log(props)
    return (
        <div>
            {props.text} {props.value}
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Header text='give feedback'/>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <Header text='statistics'/>
            <Stats text='good' value={good}/>
            <Stats text='neutral' value={neutral}/>
            <Stats text='bad' value={bad}/>
        </div>
    )
}

export default App