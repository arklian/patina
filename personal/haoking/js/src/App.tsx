import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>


const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {

    const [ counter, setCounter ] = useState(0)

    const incrementCtr = () => setCounter(counter+1)
    const resetCtr = () => setCounter(0)
    const decrementCtr = () => setCounter(counter-1)

    return (
        <>
            <Display counter = {counter}/>
            <Button text = "inc" onClick = {incrementCtr} />
            <Button onClick = {resetCtr} text = "reset"/>
            <Button onClick={decrementCtr} text = "dec"/>
        </>
    )
}

export default App