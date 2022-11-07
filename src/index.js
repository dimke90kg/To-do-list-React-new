import React from "react";
//import ReactDOM from "react-dom";
import * as ReactDOM from 'react-dom/client';
import "./index.css";
import ToDoList from "./ToDoList";

import reportWebVitals from "./reportWebVitals";

var destination=document.querySelector("#container");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 <div>
 <ToDoList/>
 </div>
);





reportWebVitals();