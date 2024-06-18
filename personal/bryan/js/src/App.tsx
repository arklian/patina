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

const StatisticLine = (props) => {
    console.log(props)
    return (
        <div>
            {props.text} {props.value} {props.extra}
        </div>
    )
}

const Statistics = (props) => {
    console.log(props)
    const {good, neutral, bad, all} = props
    if (props.all === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }
    return (
        <div>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='all' value={all}/>
            <StatisticLine text='average' value={(good - bad) / all}/>
            <StatisticLine text='positive' value={100 * props.good / props.all} extra='%'/>
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