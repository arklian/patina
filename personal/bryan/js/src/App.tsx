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

const Average = (props) => {
    console.log(props)
    if (props.all === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            {(props.good - props.bad) / props.all}
        </div>
    )
}
const Positive = (props) => {
    console.log(props)
    if (props.all === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            {100 * props.good / props.all}%
        </div>
    )
}

const Statistics = (props) => {
    console.log(props)
    const {good, neutral, bad, all} = props
    return (
        <div>
            <Stats text='good' value={good}/>
            <Stats text='neutral' value={neutral}/>
            <Stats text='bad' value={bad}/>
            <Stats text='all' value={all}/>
            <Average good={good} bad={bad} all={all}/>
            <Positive good={good} all={all}/>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleGoodClick = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        setAll(updatedGood+neutral+bad)
    }
    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setAll(good+updatedNeutral+bad)
    }
    const handleBadClick = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
        setAll(good+neutral+updatedBad)
    }

    return (
        <div>
            <Header text='give feedback'/>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <Header text='statistics'/>
            <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
        </div>
    )
}

export default App