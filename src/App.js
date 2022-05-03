import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box';

function App() {
  const [color, setColor] = useState([])

  const addColor = (e) => {
    e.preventDefault();
    if(e.target.size.value === "") {
      e.target.size.value = 200
    }
    setColor([...color, {color:e.target.color.value, size:e.target.size.value}])
    e.target.reset()
  }

  return (
    <div className="App">
      <form onSubmit={addColor}>
        <div>
          <label htmlFor='color'>Color: </label>
          <input type="text" name="color"/>
        </div>
        <div>
          <label htmlFor='size'>Size: </label>
          <input type="text" name="size"/>
        </div>
        <input type="submit" value="Add"/>
      </form>
      {color.map((item, i) => 
        <Box key={i} color={item.color} size={item.size}/>)}
    </div>
  );
}

export default App;
