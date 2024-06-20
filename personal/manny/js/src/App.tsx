import { useState } from 'react'


const Statistics = (props) => {

    if(props.all === 0){
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    const average = props.all === 0?0 : (props.good-props.bad)/props.all
    const posPer = props.all === 0?0 : (props.good/props.all)*100

    return(
        <div>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.all}</p>
            <p>average {average}</p>
            <p>positive {posPer}%</p>
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
            <h1>give feedback</h1>
            <button onClick={handleGoodClick}>
                good
            </button>

            <button onClick={handleNeutralClick}>
                neutral
            </button>

            <button onClick={handleBadClick}>
                bad
            </button>

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
        </div>
    )
}

export default App