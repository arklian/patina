// @ts-ignore
const Header = ({props}) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}
//remains the same

// @ts-ignore
const Part = ({props}) => {
    return (
        <p>
            {props.parts} {props.exercises}
        </p>
    );
};

// @ts-ignore
const Content = (props) => {
    return (
        <p>
            <Part part={props.part1} exercises={props.exercises1}/>
            <Part part={props.part2} exercises={props.exercises2}/>
            <Part part={props.part3} exercises={props.exercises3}/>
        </p>
    )
}
// @ts-ignore
const Total = (props) => {
    return(
        <>
            <p>Number of exercises {props.one + props.two + props.three}</p>
        </>
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
            <Header course={course} />
            <Content part={part1} exercises={exercises1}/>
            <Content part1={part1} exercises1={exercises1}
                     part2 = {part2} exercises2={exercises2}
                     part3 = {part3} exercises3={exercises3}/>
            <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
        </div>
    );
};


export default App
