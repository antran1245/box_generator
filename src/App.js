import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box';
import Form from './components/form';
function App() {
  const [color, setColor] = useState([])

  return (
    <div className="App">
      <Form setColor={setColor} color={color}/>
      {color.map((item, i) => 
        <Box key={i} color={item.color} size={item.size}/>)}
    </div>
  );
}

export default App;
