// import React and React-Dom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Get a reference to the div with id 'root'
const el = document.getElementById("root");

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Show a component on the screen
root.render(<App />);
