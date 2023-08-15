import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
    // console.log(' HI: ',  import.meta.env.HI),
    // console.log(' VITE_HI: ',  import.meta.env.VITE_HI),
    // console.log(' HELLO: ',  import.meta.env.HELLO),
    // console.log(' VITE_HELLO: ',  import.meta.env.VITE_HELLO),
    // console.log(' MD: ',  import.meta.env.MD),
    // console.log(' VITE_MD: ',  import.meta.env.VITE_MD)
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React123</h1>
      <Router>
          <Link to='/home'>
            HomePage
          </Link>
          <Link to='/post'>
            Post
          </Link>
          <Link to='/login'>
            Login
          </Link>
      </Router>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
