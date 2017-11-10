import React, { Component } from 'react';
import logo from './logo.svg';
import {PlaybackControls, PlayButton, PauseButton } from 'react-player-controls'
import {PlayIcon,PauseIcon} from './icons';
import './App.css';


const App = () => {
    const playHandler =()=>{
      alert('holi');
    }
    return (
      <div className="col-lg-12 ha-controles">
      <PlaybackControls/>
      </div>
    );
  
}

export default App;
