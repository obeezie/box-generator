import React, { useState } from 'react'
import './App.css';
import BoxDisplay from './components/BoxDisplay';
import BoxGenerator from './components/BoxGenerator';




function App() {

  const [boxArray, setBoxArray] = useState([]);



  const recieveNewColor = (newColor) => {
    setBoxArray([...boxArray, newColor])
  }


  return (
    <div className="App">
      <BoxGenerator onNewColor={recieveNewColor} />
      <BoxDisplay boxArray={boxArray} />

    </div>
  );
}

export default App;
