import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherApp from '../src/component/WeatherApp'
import Sorter from '../src/component/Sorter'
import RandomPicGenerator from '../src/component/RandomPicGenerator'

function App() {
  return (
    <div className="App">
      <WeatherApp/>
      <Sorter/>
      <RandomPicGenerator/>
    </div>
  );
}

export default App;
