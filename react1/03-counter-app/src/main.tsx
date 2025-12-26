import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { HelloWorldApp } from "./components/HelloWorldApp";
//import { FirstApp } from "./components/FirstApp";
//import { CounterApp } from "./components/CounterApp";
import "./index.css";
import { CounterApp2 } from "./components/CounterApp2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterApp2/>
  </StrictMode>
);


/*
<StrictMode>
    <HelloWorldApp />
    <hr />
    <FirstApp name={"Lara"} />
    <hr />
    <FirstApp />
    <hr />
    <CounterApp value={10}/>
    <hr />
    <CounterApp/>
    <hr />
    <CounterApp2/>
  </StrictMode>
*/