import './App.css'

function Header(props: { course: string}) {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

function Content(props: {part: string, exercise: number}){
    return(
        <div>
            <p>{props.part} {props.exercise}</p>
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

  return (
      <div>
          <Header course={course}></Header>
          <Content part={part1} exercise={exercises1}></Content>
          <Content part={part2} exercise={exercises2}></Content>
          <Content part={part3} exercise={exercises3}></Content>
          <Total total={exercises1 + exercises2 + exercises3}></Total>
      </div>
  )
}

export default App
