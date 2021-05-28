
import './App.css';
import React, { useState } from 'react'
import linies from './linies.json'
import styled from 'styled-components';

const Title = styled.h1`
  color: #FFFFFF;
  font-weight: 400;
  white-space: pre-wrap;
  background-color:#32a852
`;


function App() {
  const [item, setItem]=useState(linies)
  const res=linies.toString(item)
for (let i = 0; i < 7; i++) {
  linies[i] =  linies[i]  + "\n" ;
}


  return (
    <div className="App">
      <Title> {res }</Title>
    </div>
  );
}

export default App;
