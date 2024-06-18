// import { useState } from 'react'
import './App.css'

const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return(
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Total = (props) => {
    return(
        <p>
            Number of exercises {props.tot}
        </p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course = {course}/>
            <Content part = {part1} exercises = {exercises1}/>
            <Content part = {part2} exercises = {exercises2}/>
            <Content part = {part3} exercises = {exercises3}/>
            <Total tot = {exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App
