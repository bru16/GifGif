import React from 'react'
import './App.css';
import { Route } from "wouter";
import GifItem from './components/GifItem';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults';

function App() {

  return (
    <div className="App">
      <section className="App-header">
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={GifItem} />
      </section>
    </div>
  );
}

export default App;
