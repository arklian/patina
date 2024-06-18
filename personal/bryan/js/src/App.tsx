import { useState } from 'react'


const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}> {text} </button>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.text}
            </h1>
        </div>
    )
}

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
    const [scores, setScores] = useState(Array(anecdotes.length).fill(0))

    const [selected, setSelected] = useState(0)

    const [maxchoice, setMaxChoice] = useState(0)

    const randomAnecdote = () => {
        const newValue = Math.floor(Math.random() * anecdotes.length)
        setSelected(newValue)
    }

    const voteClick = () => {
        const copy = {...scores}
        const newScore = copy[selected]+1
        copy[selected]++
        setScores(copy)
        if (newScore > scores[maxchoice]) {
            setMaxChoice(selected)
        }
    }

    return (
        <div>
            <Header text='Anecdote of the day'/>
            <p> {anecdotes[selected]} </p>
            <p> has {scores[selected]} votes</p>
            <Button handleClick={voteClick} text='vote'/>
            <Button handleClick={randomAnecdote} text='next anecdote'/>
            <Header text='Anecdote with most votes' />
            <p> {anecdotes[maxchoice]} </p>
            <p> has {scores[maxchoice]} votes </p>
        </div>
    )
}

export default App