
import './App.css';
import linies from './linies.json'
import React from 'react'

function App() { 

  const res= linies.map((text) => <p>{text}</p>);
  
  return (
    <div className="App">
      <h1> {res}</h1>
    </div>
  );
}

export default App1;
