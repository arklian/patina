import { useState } from 'react'

const Display = ({text}) => <div><h1>{text}</h1></div>

const StatisticLine = ({text, count, suffix}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{count}</td>
            <td>{suffix}</td>
        </tr>
    )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({texts, counts}) => {
    if (counts[3] === 0) return (
        <>
        <Display text={texts[0]}/>
        <p>no feedback given</p>
        </>
    )
    return (
        <>
        <Display text={texts[0]}/>
            <table>
                <tbody>
                <StatisticLine text={texts[1]} count={counts[0]}/>
                <StatisticLine text={texts[2]} count={counts[1]}/>
                <StatisticLine text={texts[3]} count={counts[2]}/>
                <StatisticLine text={texts[4]} count={counts[3]}/>
                <StatisticLine text={texts[5]} count={ (counts[3] === 0) ? 0 : counts[4]}/>
                <StatisticLine text={texts[6]} count={ (counts[3] === 0) ? 0 : counts[5]} suffix="%"/>
                </tbody>
            </table>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [score, setScore] = useState(0)

    const incGood = () => {
        setGood(good+1)
        // setAll(good+1+neutral+bad) // this or after?
        setAll(all+1)
        setScore(score+1)
    }
    const incNeutral = () => {
        setNeutral(neutral+1)
        // setAll(good+neutral+1+bad)
        setAll(all+1)
    }
    const incBad = () => {
        setBad(bad+1)
        // setAll(good+neutral+bad+1)
        setAll(all+1)
        setScore(score-1)
    }

    let texts:string[] = ["statistics", "good", "neutral", "bad", "all", "average", "positive"]
    let counts:number[] = [good, neutral, bad, all, score/all, good/all*100]

    return (
        <div>
            <Display text="give feedback"/>
            <Button handleClick={incGood} text = "good" />
            <Button handleClick={incNeutral} text = "neutral"/>
            <Button handleClick={incBad} text = "bad"/>

            <Statistics texts={texts} counts={counts}/>

        </div>
    )
}

export default App