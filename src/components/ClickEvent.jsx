
export default function ClickEvent() {
    let count = 0

    const handleClick = (name)=> {
if (count<3){
    count++;
    console.log(name +' you clicked '+ count + ' times ');
}else{
    console.log(' stop clicking '+ name);
}
    };
    const handleClick3 = (e)=> e.target.textContent = "🖕";
  return (<>
  <button className="button" onClick={(e)=>{handleClick3(e)}} >Click me😃</button>
  
  </>
  )
}
