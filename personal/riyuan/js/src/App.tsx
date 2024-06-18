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
            {buttons.map((button, index) => (
                <Button key={index} text={button.text} onClick={button.handleClick} />
            ))}
        </div>
    );
};

const Statistics = ({ title }: { title: string }) => {
    return <div><h1>{title}</h1></div>;
};

const Rating = ({ prop }: { prop: { good: number; neutral: number; bad: number } }) => {
    return (
        <div>
            <p>Good: {prop.good}</p>
            <p>Neutral: {prop.neutral}</p>
            <p>Bad: {prop.bad}</p>
        </div>
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
