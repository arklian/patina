import {useState, MouseEventHandler} from 'react';
import './App.css';

function SectionTitle ({text}:{text:string}) {
    return(
        <h1>{text}</h1>
    )
}

function Button ({text, onClick}: {text: string, onClick: MouseEventHandler}){
    return(
        <button onClick={onClick}>{text}</button>
    )
}

function Statistics ({good, neutral, bad}: {good: number, neutral: number, bad: number}){
    const total:number = good + neutral + bad;
    const average:number = (good - bad) / total;
    const positivePercentage:number = good / total * 100;
    return(
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Average: {average}</p>
            <p>Positive: {positivePercentage}%</p>
        </div>
    )
}

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleClickGood = () => {
        const newGood: number = good + 1;
        console.log("current good: " + good);
        return (() => setGood(newGood))
    };

    const handleClickNeutral = () => {
        const newNeutral:number = neutral + 1;
        console.log("current neutral: " + neutral);
        return (() => setNeutral(newNeutral))
    }

    const handleClickBad = () => {
        const newBad:number = bad + 1;
        console.log("current bad: " + bad);
        return (() => setBad(newBad))
    }

    return (
      <div>
        <SectionTitle text="Give Feedback"></SectionTitle>
        <Button text="good" onClick={handleClickGood()}></Button>
        <Button text="neutral" onClick={handleClickNeutral()}></Button>
        <Button text="bad" onClick={handleClickBad()}></Button>
        <SectionTitle text="Statistics"></SectionTitle>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </div>
    )
}

export default App
