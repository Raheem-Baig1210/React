import { useState } from "react";

const Counter = (props) => {
    const {init} = props;
    const [ count, setCount ] = useState(init)
    console.log("COUNTER",props.sno)
    return (
        <>
        <button onClick={()=>setCount(count==0? count:count-1)} className="border-2 border-black p-2 mx-2">-</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)} className="border-2 border-black p-2 mx-2">+</button>
        </>
    )
}

export default Counter