import React from "react";
import List from "./components/List";
export default function App() {
  const fruits = [
    { id: 1, name: "banana", calories: 34 },
    { id: 2, name: "mango", calories: 34 },
    { id: 3, name: "strawberry", calories: 34 },
    { id: 4, name: "kivi", calories: 54 },
    { id: 5, name: "coconut", calories: 56 },
    { id: 6, name: "pineapple", calories: 67 },
    { id: 7, name: "apple", calories: 33 },
  ];
  const vegetables = [
    { id: 1, name: "potato", calories: 111 },
    { id: 2, name: "carrot", calories: 34 },
    { id: 3, name: "corn", calories: 'apple' },
    { id: 4, name: "peas", calories: 99 },
    { id: 5, name: "cucumber", calories: 10 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      <List items={vegetables} category="vegetables" />
      <List  />
    </>
  );
}
