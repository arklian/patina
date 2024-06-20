const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}

const App = () => {
    const name = 'Bryan'
    const age = 19
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name='Maya' age={16+10}/>
            <Hello name={name} age={age}/>
        </div>
    )
}

export default App