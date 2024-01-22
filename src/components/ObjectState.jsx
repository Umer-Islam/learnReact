import { useState } from "react"




export default function ObjectState() {

    let date = new Date();
    let year = date.getFullYear()
    

    const [car,setCar]= useState({make:'toyota',model:'gtr',color:'yellow',year:year})

function changeMake(event){
    setCar(c => ({...c, make: event.target.value }))
}
function changeModel(event){
    setCar(c => ({...c, model: event.target.value }))

}
function changeColor(event){
    setCar(c => ({...c, color: event.target.value }))

}
function changeYear(event){
    if(car.year > 1960 || car.year<year )
    setCar(c => ({...c, year: event.target.value }))

}

    return (
    <div>
        <label htmlFor="car.make">make  </label>
        <input type="text" value={car.make} onChange={changeMake}/><br />
        <label htmlFor="">model  </label>
        <input type="text" value={car.model} onChange={changeModel} /><br />
        <label htmlFor="">color  </label>
        <input type="color" value={car.color} onChange={changeColor}/><br />
        <label htmlFor="">year  </label>
        <input type="number" value={car.year} onChange={changeYear}/>
<p>you selected a {car.model} {car.make} {car.year} with <span  style={{backgroundColor:car.color}}> {car.color}</span> </p>
    </div>
  )
}
