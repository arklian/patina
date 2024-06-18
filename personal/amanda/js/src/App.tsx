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

function Content(props: {parts: string[], exercises: number[]}){
    return(
        <div>
            <Part part={props.parts[0]} exercise={props.exercises[0]}></Part>
            <Part part={props.parts[1]} exercise={props.exercises[1]}></Part>
            <Part part={props.parts[2]} exercise={props.exercises[2]}></Part>
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
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const parts: string[] = [part1, part2, part3];
  const exercises: number[] = [exercises1, exercises2, exercises3];

  return (
      <div>
          <Header course={course}></Header>
          <Content parts={parts} exercises={exercises}></Content>
          <Total total={exercises1 + exercises2 + exercises3}></Total>
      </div>
  )
}

export default App
