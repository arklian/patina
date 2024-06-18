import React from 'react';

const Header = (props:any) => {
    console.log(props)
    return <h1>{props.course}</h1>
}


const Content = (prop:any) => {
    return (
        <div>
            <p>
                {prop.part1.name} {prop.part1.exercises}
            </p>
            <p>
                {prop.part2.name} {prop.part2.exercises}
            </p>
            <p>
                {prop.part3.name} {prop.part3.exercises}
            </p>
        </div>
    );
};

const Total: React.FC<{ part1: number; part2: number; part3: number }> = ({part1, part2, part3}) => {
    return (
        <div>
        <p>Number of exercises {part1 + part2 + part3}</p>
        </div>
    );
}

const App: React.FC = () => {
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
            <Header  course={course}/>
            <Content part1={part1} part2={part2} part3={part3}/>
            <Total part1={part1.exercises} part2={part2.exercises} part3={part3.exercises}/>
        </div>
    );
}

export default App;
