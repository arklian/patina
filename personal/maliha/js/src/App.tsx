const Header = (props) => {
    console.log(props)
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}
const Part = (props) =>{
    return(
        <>
           <p>{props.parts} {props.exercises}</p>
        </>
    )
}
const Content = (props) => {
    return (
        <>
            <Part parts={props.part1} exercises={props.exercises1}/>
            <Part parts={props.part2} exercises={props.exercises2}/>
            <Part parts={props.part3} exercises={props.exercises3}/>
        </>
    )
}
const Total = (props) => {
    return(
        <>
            <p>Number of exercises {props.one + props.two + props.three}</p>
        </>
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
            <Content part1={parts[0].name} exercises1={parts[0].exercises}
                     part2={parts[1].name} exercises2={parts[1].exercises}
                     part3={parts[2].name} exercises3={parts[2].exercises}/>
            <Total one={parts[0].exercises} two ={parts[1].exercises} three={parts[2].exercises}/>
        </div>
    )
}

export default App
