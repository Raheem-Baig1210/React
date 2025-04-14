import './App.css'
import Name,{Pi,Age} from "./Name"
import Counter from './counter'
import Users from "./users"
function App() {

  return (
    <>
        <Name name="Raheem" course="MERN STACK"/>
        <Counter sno={1} init={1}/>
        <Counter sno={2} init={1}/>
        <Users/>
    </>
  )
}

export default App
