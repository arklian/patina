import { useState } from 'react'


const Statistics = (props) => {
    return (
        <div>
            <p>good: {props.good}</p>
            <p>neutral: {props.neutral}</p>
            <p>bad: {props.bad}</p>
            <p>all: {props.total} </p>
            <p>average: {((props.good * 1) + (props.bad * -1)) / props.total} </p>
            <p>positive: {(props.good / props.total) * 100} %</p>
        </div>
)
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGood = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        setTotal(updatedGood + neutral + bad)
    }

    const handleNeutral = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setTotal(good + updatedNeutral + bad)
    }

    const handleBad = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
        setTotal(good + neutral + updatedBad)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
            <h1>Statistics</h1>
            <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total}/>
        </div>
    )
}

export default App