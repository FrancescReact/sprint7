
import './App.css';
import React, { useState } from 'react'
import linies from './linies.json'

function App() {

  const [index, setIndex] = useState(0);

  const next = () => {

    setIndex(index => index + 1);

    if (index === 6) {
      console.log(index);
      setIndex(0);
    }

  }

  const back = () => {

    setIndex(index => index - 1);

    if (index === 0) {
      console.log(index);
      setIndex(0);
    }
  }
  return (

    <div className="App">
      <button onClick={next}>següent</button>
      <button onClick={back}>enrere</button>
      <h1>{linies[index].texte}</h1>

    </div>
  );
}

export default App;
