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

function Total(props: {total: number}){
    return(
        <div>
            <p>Number of exercises {props.total}</p>
        </div>
    )
}

function App() {
  const course = 'Half Stack application development';
  const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
  };
  const part2 = {
      name: 'Using props to pass data',
      exercises: 7
  };
  const part3 = {
      name: 'State of a component',
      exercises: 14
  };
  const parts : {name: string, exercises: number}[] = [part1, part2, part3];

  return (
      <div>
          <Header course={course}></Header>
          <Content parts={parts}></Content>
          <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}></Total>
      </div>
  )
}

export default App
