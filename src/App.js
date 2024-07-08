import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Body from './components/Body';
import Influencers from './components/Influencers';
import Bank from './components/Bank';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Body />
      <Influencers />
      <Bank />
    </div>
  );
};

export default App;
