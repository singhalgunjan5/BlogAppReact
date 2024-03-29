// App.js
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Logo from './components/Logo';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSideContext';
function App() {
  return (
    <div className="app-container">
      <Logo />
      <div className="sides-containers">
        <LeftSide className="left-side" />
        <RightSide className="right-side" />
      </div>
    </div>
  );
}

export default App;
