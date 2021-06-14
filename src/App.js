import React, { useState } from 'react'
import './App.css';
import Gifs from './components/Gifs'
function App() {

  const [keyword, setKeyword] = useState('animals');

  return (
    <div className="App">
      <Gifs keyword={keyword} />
    </div>
  );
}

export default App;
