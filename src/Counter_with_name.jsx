import { useState } from "react"

export default function Counter_with_name() {
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  function heandleIncrement(){
    setAge((current)=>setAge(current+1));
  }
  function heandleDecrement(){
    setAge((current)=>setAge(current-1));
  }
  return (
    <div>
      <input value={name} onChange={(e)=>setName(e.target.value)}></input>
      <br />
      <button onClick={heandleIncrement}>+</button>
      <span>{age}</span>
      <button onClick={heandleDecrement}>-</button>
      <p>my name is {name}.I am {age} years old</p>
    </div>
  )
}
