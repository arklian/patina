const CourseName = ({ course }) => {
    return (
        <div>
            <h1>{course}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            <p>{parts[0].name} {parts[0].exercises}</p>
            <p>{parts[1].name} {parts[1].exercises}</p>
            <p>{parts[2].name} {parts[2].exercises}</p>
        </div>
    )
}

const Total = ({ parts }) => {
    return (
        <div>
            <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
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
            <CourseName course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}


export default App
