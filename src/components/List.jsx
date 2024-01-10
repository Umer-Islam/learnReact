export default function List() {
  const fruits = [
    "banana",
    "mango",
    "strawberry",
    "kivi",
    "coconut",
    "pineapple",
    "apple",

  ];
//   fruits.sort()

  const listItems = fruits.map((fruit)=>(
<li>{fruit}</li>
    ))
  return (        <ol>{listItems}</ol>

  );
}