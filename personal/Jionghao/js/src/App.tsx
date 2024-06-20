import { useState } from 'react'



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
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>all: {total} </p>
            <p>average: {((good * 1) + (bad * -1)) / total } </p>
            <p>positive: {(good / total) * 100} %</p>
        </div>
    )
}

export default App