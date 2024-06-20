import { useState } from 'react'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({text, value}) => (
    <p>{text} {value}</p>
)

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
            <StatisticLine text="good" value ={props.good} />
            <StatisticLine text="neutral" value ={props.neutral} />
            <StatisticLine text="bad" value ={props.bad} />
            <StatisticLine text="all" value ={props.all} />
            <StatisticLine text="average" value ={average} />
            <StatisticLine text="positive" value ={`${posPer}%`} />
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
            <Button handleClick={handleGoodClick} text={'good'}/>
            <Button handleClick={handleNeutralClick} text={'neutral'}/>
            <Button handleClick={handleBadClick} text={'bad'}/>


            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
        </div>
    )
}

export default App