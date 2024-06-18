// import { useState } from 'react'
//
// const App = () => {
//     // save clicks of each button to its own state
//     const [good, setGood] = useState(0)
//     const [neutral, setNeutral] = useState(0)
//     const [bad, setBad] = useState(0)
//
//     return (
//         <div>
//             <h1>give feedback</h1>
//             <h1>statistics</h1>
//         </div>
//     )
// }
//
// export default App
import { useState } from 'react'

const App = () => {
    const [ counter, setCounter ] = useState(0)

    setTimeout(
        () => setCounter(counter + 1),
        1000
    )

    return (
        <div>{counter}</div>
    )
}

export default App