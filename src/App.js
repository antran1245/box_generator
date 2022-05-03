import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box';

function App() {
  const [color, setColor] = useState([])

  const addColor = (e) => {
    e.preventDefault();
    setColor([...color, e.target.color.value])
  }

  return (
    <div className="App">
      <form onSubmit={addColor}>
        <label htmlFor='color'>Color: </label>
        <input type="text" name="color"/>
        <input type="submit" value="Add"/>
      </form>
      {color.map((item, i) => 
        <Box color={item}/>)}
    </div>
  );
}

export default App;
