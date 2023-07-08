// import React and React-Dom libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Get a reference to the div with id 'root'
const el = document.getElementById("root");

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
  let message = "Bye there!";
  if (Math.random() > 0.5) message = "Hi there!";
  return <h1>{message}</h1>;
}

// Show a component on the screen
root.render(<App />);
