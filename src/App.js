import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Body from './components/Body';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Body />
    </div>
  );
};

export default App;
