import {useState, MouseEventHandler} from 'react';
import './App.css';

function Button ({text, onClick}: {text: string, onClick: MouseEventHandler}){
    return(
        <button onClick={onClick}>{text}</button>
    )
}

function App() {
    const anecdotes:string[] = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState<Array<number>>(Array(anecdotes.length).fill(0));
    const [mostVoted, setMostVoted] = useState(0);

    const handleNext = () => {
        let randNum:number = selected;
        while (selected === randNum) {
            randNum = Math.round(Math.random() * (anecdotes.length - 1));
        }
        return(() => setSelected(randNum))
    }

    const handleVote = () => {
        const copy = [...points];
        copy[selected] += 1;
        calcMostVoted();
        return(() => setPoints(copy))
    }

    const calcMostVoted = () => {
        let index = mostVoted;
        let votes = points[mostVoted];
        for (let i = 0; i < points.length; i++){
            if (i !== mostVoted && points[i] > votes) {
                index = i;
                votes = points[i];
            }
        }
        if (index !== mostVoted)
            setMostVoted(index)
    }


    return (
        <div>
            <h1>Anecdote of the Day</h1>
            <p>"{anecdotes[selected]}"</p>
            <p>has {points[selected]} votes</p>
            <Button text="vote" onClick={handleVote()}></Button>
            <Button text="next anecdote" onClick={handleNext()}></Button>
            <h1>Anecdote with the Most Votes</h1>
            <p>"{anecdotes[mostVoted]}"</p>
            <p>has {points[mostVoted]} votes</p>
        </div>
    )
}

export default App
