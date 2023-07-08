// import React and React-Dom libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Get a reference to the div with id 'root'
const el = document.getElementById("root");

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  return <h1>{time}</h1>;
}

// Show a component on the screen
root.render(<App />);
