import React from 'react'
import './App.css';
import { Route } from "wouter";
//import GifItem from './components/Gifs/GifItem';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults';
import './index.css'
import { GifsContextProvider } from './context/GifsContext'
import SingleGif from './pages/SingleGif';
import Header from './components/Header/Header'
import LoginForm from './pages/LoginForm';
import { UserContextProvider } from './context/userContext';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header />
        <h1>GifGif</h1>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword/:rating?" component={SearchResults} />
          <Route path="/gif/:id" component={SingleGif} />
          <Route path="/login" component={LoginForm} />
        </GifsContextProvider>
      </div>
    </UserContextProvider>
  );
}

export default App;
