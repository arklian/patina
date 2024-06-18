import './App.css'

const Parts = (props) => {
    return (
    <div>
        {props.parts.map(part => (
            <p>{part.name} {part.exercises}</p>
        ))}
    </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Parts parts={props.parts}/>
        </div>
    )
}

const Total = (props) => {
    let sum = 0;
    props.parts.forEach(value => {
        sum = sum + value.exercises
    })

    return (
        <div>
            <p>Number of exercises {sum}</p>
        </div>
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
                <Header course={course} />
                <Content parts={parts}/>
                <Total parts={parts}/>
            </div>
        )
}

export default App
