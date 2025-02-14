import logo from './logo.svg';
import './App.css';
import Button from './Button';
import React, { useEffect, useState } from 'react';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(numberA + numberB);
  }, [numberA, numberB]);

  return (
    <div className="App">
      <Button onClick={() => console.log('clicked')}>
        Click Me
      </Button>

      <div>
        <input
          type="number"
          value={numberA}
          onChange={(e) => setNumberA(Number(e.target.value))}
        />
        +
        <input
          type="number"
          value={numberB}
          onChange={(e) => setNumberB(Number(e.target.value))}
        />
        =
        {result}
      </div>
    </div>
  );
}

export default App;
