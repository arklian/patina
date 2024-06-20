import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

const refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <App counter={counter} />
    )
}

refresh()
counter += 1
refresh()
counter += 1
refresh()