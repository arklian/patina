const App = () => {
    const course = 'Half Stack application development';
    const parts = [
        { name: 'Fundamentals of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 }
    ];

    // @ts-ignore
    const Header = ({ course }) => {
        return (
            <h1>{course}</h1>
        );
    };

    // @ts-ignore
    const Content = ({ parts }) => {
        return (
            <div>
                <p>{parts[0].name} {parts[0].exercises}</p>
                <p>{parts[1].name} {parts[1].exercises}</p>
                <p>{parts[2].name} {parts[2].exercises}</p>
            </div>
        );
    };

    // @ts-ignore
    const Total = ({ parts }) => {
        const totalExercises = parts.reduce((sum: any, part: { exercises: any; }) => sum + part.exercises, 0);
        return (
            <p>Number of exercises {totalExercises}</p>
        );
    };

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};


export default App