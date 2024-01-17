import React,{useState} from 'react';

export default function State() {
let[name,setName]=useState('')
function onDoubleClickHandle(){
    let userInput = prompt('enter your name');
    setName(userInput)
}
let[isEmployed,setIsEmployed]=useState(false)
const employmentStatus = ()=>{
setIsEmployed(!isEmployed)
}
let[count,setCount]=useState(0)
const decrement = ()=>{
    if(count >0){
        setCount(count-1)
    }
}
const reset = ()=>{
    setCount(0)
}
const increment = ()=>{
    setCount(count +1)
}
  return (<>
    <h1>Name: {name}</h1>
    <button className='state-button' onDoubleClick={onDoubleClickHandle}>DoubleClick to Change name</button>
    <h1>Is employed: {isEmployed ? 'Yes':'No'}</h1>
    <button className='state-button' onClick={()=>{
        employmentStatus()
    }}>Click to Change name</button>
    <div>
        <h3>Count: {count}</h3>
        <br />
        <button className='state-button' onClick={decrement}>Decrement</button>
        <button className='state-button' onClick={reset}>Reset</button>
        <button className='state-button' onClick={increment}>Increment</button>
    </div>
    </>
  )
}
