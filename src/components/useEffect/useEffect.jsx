import {useEffect,useState} from 'react';

export default function LearnUseEffect() {

const [width,setWidth]=useState(window.innerWidth)
const [height, setHeight] = useState(window.innerHeight)
useEffect(()=>{
window.addEventListener('resize',resize)
console.log('event Done')
    },[])
 
function resize (){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
} 
 
    return (
    <div>
<h2>Width: {width}</h2>
<h2>Height: {height}</h2>


    </div>
  )
}
