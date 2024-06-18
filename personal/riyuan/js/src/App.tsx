const Header = ({ course }: { course: any }) => {
    return <h1>{course}</h1>;
};

// Content component with props typed as any
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

// Total component with props typed as any
const Total = ({ parts }: { parts: any[] }) => {
    const total = parts.reduce((acc, part) => acc + part.exercises, 0);
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    );
};

// App component using any for component props
const App = () => {
    const course = 'Half Stack application development';
    const parts = [
        { name: 'Fundamentals of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 }
    ];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
}

export default App;
