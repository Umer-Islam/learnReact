import "./App.css";
import ChangeHook from "./components/ChangeHook";
import React from 'react'
import ChangeNum from "./components/ChangeNum";
import ChangeOption from "./components/ChangeOption";
import ChangeComment from "./components/ChangeComment";
import ChangeCheck from "./components/ChangeCheck";

export default function Form() {
  return (
    <div>

<ChangeHook/>
<ChangeNum/>
<ChangeOption/>
<ChangeComment/>
<ChangeCheck/>



    </div>
  )
}


