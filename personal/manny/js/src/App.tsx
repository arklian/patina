const Header = (props) => {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}


const Part = (prop) =>{
    return(
        <div>
            <p>{prop.name} {prop.exercises}</p>
        </div>
    )
}

const Content= (props) =>{
    return(
        <div>
            <Part name = {props.part[0].name} exercises = {props.part[0].exercises}/>
            <Part name = {props.part[1].name} exercises = {props.part[1].exercises}/>
            <Part name = {props.part[2].name} exercises = {props.part[2].exercises}/>
        </div>

    )
}




const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
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
    const part = [
        {name: 'Fundamentals of React', exercises:10 },
        {name: 'Using props to pass data', exercises:7 },
        {name: 'State of a component', exercises:14 }
    ]

    return (
        <div>
            <Header course={course} />
            <Content part = {part} />

            <Total exercises1 = {part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
        </div>
    )
}

export default App