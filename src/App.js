import logo from './logo.svg';
import './App.css';
import Button from './Button';
import React, { useEffect, useState } from 'react';
import Form from './Form';

function App() {

  return (
    <div className="App">
      <Button onClick={() => console.log('clicked')}>
        Click Me
      </Button>

      <Form />  
    </div>
  );
}

export default App;
