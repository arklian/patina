import React from 'react';

const Header: React.FC<{ course: string }> = ({ course }) => {
    return <h1>{course}</h1>;
};

const Part: React.FC<{ part: { name: string; exercises: number } }> = ({ part }) => {
    return <p>{part.name}: {part.exercises}</p>;
};

const Content: React.FC<{ parts: Array<{ name: string; exercises: number }> }> = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} part={part} />
            ))}
        </div>
    );
};

const Total: React.FC<{ part1: number; part2: number; part3: number }> = ({ part1, part2, part3 }) => {
    return (
        <div>
            <p>Number of exercises {part1 + part2 + part3}</p>
        </div>
    );
}

const App: React.FC = () => {
    const course = 'Half Stack application development';
    const parts = [
        { name: 'Fundamentals of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 }
    ];

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total part1={parts[0].exercises} part2={parts[1].exercises} part3={parts[2].exercises}/>
        </div>
    );
}

export default App;
