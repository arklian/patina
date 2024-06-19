import { useState } from 'react'
const Button = (props) => {
    return (
        <button onClick={props.onClick} >
            {props.text}
        </button>
    )
}
const StatisticLine = ({text, value, symbol}) => {
    return (
        <tr>
            <td>{text}:</td>
            <td>{value}{symbol}</td>
        </tr>
    )
}
const Statistics = ({good, neutral, bad}) => {
    if (good != 0 || neutral != 0 || bad != 0){
        return (
            <div>
                <table>
                    <StatisticLine text="good" value={good} symbol=""/>
                    <StatisticLine text="neutral" value={neutral} symbol=""/>
                    <StatisticLine text="bad" value={bad} symbol=""/>
                    <StatisticLine text="all" value={bad+good+neutral} symbol="" />
                    <StatisticLine text="average" value={(good-bad)/(good+bad+neutral)} symbol=""/>
                    <StatisticLine text="positive" value={(good/(good+bad+neutral))*100} symbol="%"/>
                </table>
            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
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
            <Statistics good={good} neutral={neutral} bad={bad}
            />
        </div>
    )
}

export default App