import { useState } from 'react'

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

    const average = all === 0?0 : (good-bad)/all
    const posPer = all === 0?0 : (good/all)*100

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

            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {posPer}%</p>
        </div>
    )
}

export default App