const Header = ({ prop }: { prop: any }) => {
    return <h1>{prop}</h1>;
};

const Content = ({ parts }: { parts: any[] }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <p key={index}>
                    {part.name} {part.exercises}
                </p>
            ))}
        </div>
    );
};

const Total = ({ parts }: { parts: any[] }) => {
    const total = parts.reduce((acc, part) => acc + part.exercises, 0);
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    );
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    };

    return (
        <div>
            <Header prop={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
}

export default App;