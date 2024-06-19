import { useState } from 'react'
const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}
const Display = (props) => {
    return (
        <div> {props.type} {props.counter} {props.symbol}</div>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const increaseGood = () => setGood(good + 1)
    const increaseNeutral = () => setNeutral(neutral + 1)
    const increaseBad = () => setBad(bad + 1)

    return (
        <div>
            <h1>give feedback</h1>
            <Button
                onClick={increaseGood}
                text="good"
            />
            <Button
                onClick={increaseNeutral}
                text="neutral"
            />
            <Button
                onClick={increaseBad}
                text="bad"
            />
            <h1>statistics</h1>
            <Display type="good" counter={good}/>
            <Display type="neutral" counter={neutral}/>
            <Display type="bad" counter={bad}/>
            <Display type="all" counter={good+bad+neutral}/>
            <Display type="average" counter={(good-bad)/(good+bad+neutral)}/>
            <Display type="positive" counter={(good/(good+bad+neutral))*100} symbol = "%"/>
        </div>
    )
}

export default App