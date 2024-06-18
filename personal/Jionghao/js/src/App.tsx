// import { useState } from 'react'
import './App.css'

const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
}
const Part = (props) => {
    return(
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
    return(
        <div>
            <Part part = {props.prt1} exercises = {props.exe1} />
            <Part part = {props.prt2} exercises = {props.exe2} />
            <Part part = {props.prt3} exercises = {props.exe3} />
        </div>
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
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course = {course}/>
            <Content prt1 = {part1.name} exe1 = {part1.exercises}
                     prt2 = {part2.name} exe2 = {part2.exercises}
                     prt3 = {part3.name} exe3 = {part3.exercises}
            />
            <Total tot = {part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}


export default App
