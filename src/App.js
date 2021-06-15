import React from 'react'
import './App.css';
import { Route } from "wouter";
import GifItem from './components/Gifs/GifItem';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults';
import './index.css'

function App() {

  return (
    <div className="App">
      <h1>GifGif</h1>
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={SearchResults} />
      <Route path="/gif/:id" component={GifItem} />
    </div>
  );
}

export default App;
