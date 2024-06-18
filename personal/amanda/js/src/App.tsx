import './App.css'

function Header(props: { course: string}) {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

function Part(props: {part: string, exercise: number}) {
    return(
        <div>
            <p>{props.part} {props.exercise}</p>
        </div>
    )
}

function Content(props: {parts: {name: string, exercises: number}[]}){
    return(
        <div>
            <Part part={props.parts[0].name} exercise={props.parts[0].exercises}></Part>
            <Part part={props.parts[1].name} exercise={props.parts[1].exercises}></Part>
            <Part part={props.parts[2].name} exercise={props.parts[1].exercises}></Part>
        </div>
    )
}

function Total(props: {parts: {name: string, exercises: number}[]}){
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
    return(
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}

function App() {
  const course = 'Half Stack application development';
  const parts: {name: string, exercises: number}[] = [
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
      ];

  return (
      <div>
          <Header course={course}></Header>
          <Content parts={parts}></Content>
          <Total parts={parts}></Total>
      </div>
  )
}

export default App
