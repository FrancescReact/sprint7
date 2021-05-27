
import './App.css';
import React from 'react'
import linies from './linies.json'


function App() {
  linies.forEach(item => {
    linies.toString(item);
  })

  return (
    <div className="App">
      <h1>{linies.toString() }</h1>
    </div>
  );
}

export default App;
