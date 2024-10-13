import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div className="live-wallpaper">
        <div className="content">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
