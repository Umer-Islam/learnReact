import { useState } from "react"

useState
export default function ColorPicker() {
const[color,setColor]= useState('#d33636

')
function handleColorChange (e){
    setColor(e.target.value)

}   

return (
    <div>
<div className="color-picker">
    <div className="selector">
        <h1 className="first-heading">color picker</h1>
        <p className="color-display" style={{backgroundColor:color}} >{color} </p>
        <label htmlFor="input"> select a color </label>
 <input type="color"value={color} onChange={handleColorChange} />
    </div>
</div>
    </div>
  )
}
