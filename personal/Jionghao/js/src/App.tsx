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
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course = {course}/>
            <Content prt1 = {parts[0].name} exe1 = {parts[0].exercises}
                     prt2 = {parts[1].name} exe2 = {parts[1].exercises}
                     prt3 = {parts[2].name} exe3 = {parts[2].exercises}
            />
            <Total tot = {parts[0].exercises + parts[1].exercises + parts[2].exercises} />
        </div>
    )
}


export default App
