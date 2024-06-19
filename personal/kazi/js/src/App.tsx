import { useState } from 'react'
import './App.css'

const DisplayAnecdote = ({selectedNum, anecdote, votes}) => {
    return (
        <div>
            <p>{anecdote[selectedNum]}</p>
            <p>has {votes} votes</p>
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const [anecdoteArray, setAnecdote] = useState(Array(anecdotes.length).fill(0))
    const [selected, setSelected] = useState(0)

    const handleRandomNumber = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    }

    const handleVotes = () => {
        const copy = {...anecdoteArray}
        copy[selected] += 1
        setAnecdote(copy)
    }

    return (
        <div>
            <DisplayAnecdote selectedNum={selected} anecdote={anecdotes} votes={anecdoteArray[selected]}/>
            <Button handleClick={handleVotes} text='vote'/>
            <Button handleClick={handleRandomNumber} text='next anecdote'/>
        </div>
    )
}

export default App
