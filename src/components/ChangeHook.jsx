import {useState} from 'react'

export default function ChangeHook() {

    const[text,setText]=useState('')
    function handleChange(event){
        setText(event.target.value)
    }
  return (<>
  <input className='input-text' type="text" value = {text} onChange={handleChange}/>
  <h3 className='changehook'> {text}</h3>
  
  </>
  )
}
