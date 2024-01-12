import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import'./App.css'
import ClickEvent from "./components/ClickEvent.jsx";
import List  from "./components/List.jsx";
import State from "./components/State.jsx";
import ChangeHook from "./components/ChangeHook.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
{/* <ClickEvent /> */}
{/* <State /> */}
<ChangeHook/>
    {/* <List /> */}
  </React.StrictMode>
);
