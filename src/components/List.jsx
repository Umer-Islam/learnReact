export default function List() {
  const fruits = [
   { id: 1, name:"banana",calories:34},
    {id:2, name:"mango",calories:34},
    {id:3, name:"strawberry",calories:34},
    {id:4, name:"kivi",calories:54},
    {id:5, name:"coconut",calories:56},
   { id:6, name:"pineapple",calories:67},
    {id:7, name:"apple",calories:33},

  ];
  // for alphabetical order
  fruits.sort((a,b)=> a.name.localeCompare(b.name))
// for reverse alphabetical order reverse a with b in above line
// NUMERIC  sorting calories from highest to lowest
fruits.sort((a,b)=> a.calories - b.calories)
  const listItems = fruits.map((fruit)=>(<>
<li key ={fruit.id}>{fruit.name}: &nbsp;
                    <b>{fruit.calories}</b></li>

</>
    ))
  return (        <ol>{listItems}</ol>

  );
}