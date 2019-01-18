import React, { Component } from 'react';
import './App.css';
import { profiles, users, movies } from './data.js';
import PopularMovies from './PopularMovies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 2 - Passing Data</p>
        </header>
        <main className="App-main">
          <h2>How Popular is Your Favorite Movie?</h2>
          <PopularMovies profiles={profiles} users={users} movies={movies} />
        </main>
      </div>
    );
  }
}

export default App;
