import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Vivek Gymholic</h1>
      <h2>Counter Value: {counter}</h2>
      
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
