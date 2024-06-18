import { useState } from 'react'
import './App.css'

const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0)

    console.log('rendering with counter value', counter)

    const increaseByOne = () => {

        console.log('increasing, value before', counter)
        setCounter(counter + 1)
    }

    const decreaseByOne = () => {

        console.log('decreasing, value before', counter)
        setCounter(counter - 1)
    }

    const setToZero = () => {

        console.log('resetting to zero, value before', counter)
        setCounter(0)
    }

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text="plus" />
            <Button onClick={setToZero} text="zero" />
            <Button onClick={decreaseByOne} text="minus" />
        </div>
    )
}

export default App
