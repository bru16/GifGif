import React from 'react'
import './App.css';
import Gifs from './components/Gifs'
import { Route } from "wouter";
import GifItem from './components/GifItem';

function App() {

  //const [keyword, setKeyword] = useState('argentina');

  return (
    <div className="App">
      <section className="App-header">
        <h1>App</h1>
        <Route path="/gifs/:keyword" component={Gifs} />
        <Route path="/gif/:id" component={GifItem} />
      </section>
    </div>
  );
}

export default App;
