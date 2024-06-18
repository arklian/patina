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
            <Header course={course} />
            <Content part1={part1.name} exercises1={part1.exercises}
                     part2={part2.name} exercises2={part2.exercises}
                     part3={part3.name} exercises3={part3.exercises}/>
            <Total one={part1.exercises} two ={part2.exercises} three={part3.exercises}/>
        </div>
    )
}

export default App
