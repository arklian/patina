import React, { useState } from 'react';

const Header = ({ title }: { title: string }) => {
    return <div><h1>{title}</h1></div>;
};

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
    return <button onClick={onClick}>{text}</button>;
};

const ButtonsContainer = ({ buttons }: { buttons: { text: string; handleClick: () => void }[] }) => {
    return (
        <div>
            <p>
                {buttons.map((button, index) => (
                    <Button key={index} text={button.text} onClick={button.handleClick} />
                ))}
            </p>
        </div>
    );
};

const Statistics = ({ title }: { title: string }) => {
    return <div><h1>{title}</h1></div>;
};

const StatisticLine = ({ text, value }) => {
    return (

            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>

    );
};

const Rating = ({ prop }: { prop: { good: number; neutral: number; bad: number } }) => {
    const style = { margin: 0 }; // Remove margins for close spacing
    const totalFeedback = prop.good + prop.neutral + prop.bad;

    // Early return to not display any content if there is no feedback
    if (totalFeedback === 0) {
        return(
            <div>
                <p style={style}>No feedback given</p>
            </div>
        );
    }

    const average = ((prop.good - prop.bad) / totalFeedback).toFixed(2);
    const positivePercentage = ((prop.good / totalFeedback) * 100).toFixed(2);

    return (

            <table>
                <thead>
                <StatisticLine text="good" value={prop.good}/>


                <StatisticLine text="neutral" value={prop.neutral}/>


                <StatisticLine text="neutral" value={prop.neutral}/>

                <StatisticLine text="bad" value={prop.bad}/>


                <StatisticLine text="all" value={totalFeedback}/>

                <StatisticLine text="Average" value={average}/>

                <StatisticLine text="Positive" value ={positivePercentage} />

                </thead>

            </table>




    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const title = "Give Feedback";
    const statisticsTitle = "Statistics";
    const buttons = [
        { text: "Good", handleClick: () => setGood(good + 1) },
        { text: "Neutral", handleClick: () => setNeutral(neutral + 1) },
        { text: "Bad", handleClick: () => setBad(bad + 1) }
    ];

    return (
        <div>
            <Header title={title} />
            <ButtonsContainer buttons={buttons} />
            <Statistics title={statisticsTitle} />
            <Rating prop={{ good, neutral, bad }} />
        </div>
    );
};

export default App;
