import { useState } from 'react'
import './App.css'

const Display = ({ name }) => (
    <h1>{name}</h1>
)

const Statistics = ( {total_reviews} ) => {
    if (total_reviews[3] === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <p>
                good {total_reviews[0]}
            </p>
            <p>
                neutral {total_reviews[1]}
            </p>
            <p>
                bad {total_reviews[2]}
            </p>
            <p>
                all {total_reviews[3]}
            </p>
            <p>
                average {(total_reviews[0] - total_reviews[2]) / total_reviews[3]}
            </p>
            <p>
                positive {total_reviews[0] / total_reviews[3]} %
            </p>
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const total_reviews = [good, neutral, bad, all]

    const handleGoodCLick = () => {
        setGood(good + 1)
        setAll(all + 1)
    }

    const handleNeutralCLick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }

    const handleBadCLick = () => {
        setBad(bad + 1)
        setAll(all + 1)
    }

    return (
        <div>
            <Display name='give feedback'/>
            <Button handleClick={handleGoodCLick} text='good'/>
            <Button handleClick={handleNeutralCLick} text='neutral'/>
            <Button handleClick={handleBadCLick} text='bad'/>
            <Display name='statistics'/>
            <Statistics total_reviews = {total_reviews}/>
        </div>
    )
}

export default App
