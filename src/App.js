import React from 'react'
import './App.css';
import { Route, Link } from "wouter";
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults';
import './index.css'
import { GifsContextProvider } from './context/GifsContext'
import SingleGif from './pages/SingleGif/SingleGif';
import Header from './components/Header/Header'
import LoginForm from './pages/LoginForm';
import { UserContextProvider } from './context/userContext';
import RegisterForm from './pages/RegisterForm';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <UserContextProvider>
        <div className="App">
          <Header />
          <Link to='/'><h1>GifGif</h1></Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={SingleGif} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
          </GifsContextProvider>
        </div>
      </UserContextProvider>
    </HelmetProvider>
  );
}

export default App;
