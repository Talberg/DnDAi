import React, { useState } from 'react';
import ApiButton from './ApiButton';


function App() {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Text Box App</h1>
      <input type="text" value={inputText} onChange={handleChange} />
      <p>You entered: {inputText}</p>
      <ApiButton props={inputText} />
    </div>
  );
}

export default App();