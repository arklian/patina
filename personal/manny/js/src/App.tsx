const Header = (props) => {
    return(
        <div>
            <h1>{props.courseName}</h1>
        </div>
    )
}


const Part = (props) =>{
    return(
        <div>
            <p>{props.part.name} {props.part.exercises}</p>
        </div>
    )
}

const Content= (props) =>{
    return(
        <div>
            {props.parts.map(part => (
                <Part key={part.name} part={part}/>
            ))}
        </div>
    )
};




const Total = (props) => {

    let totalNum = 0;

    props.parts.forEach(part => {
        totalNum += part.exercises;
    });

    return (
        <div>
            <p>Number of exercises {totalNum}</p>
        </div>
    )
}


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
    }

    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
        </div>
    )
}

export default App