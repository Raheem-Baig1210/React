import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name,{Pi,Age} from "./Name"
import Counter from './counter'
function App() {
  const [counts, setCounts] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* console.log(Pi,Age) */}
      <div className="card">
        <button onClick={() => setCounts((counts) => counts + 1)}>
          count is {counts}
        </button>
        <Name name="Raheem" course="MERN STACK"/>
        <Counter sno={1} setCounts={setCounts} init={1}/>
        <Counter sno={2} setCounts={setCounts} init={1}/>
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
