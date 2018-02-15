import React from 'react';
import ReactDOM from 'react-dom';
import './Render.css';
import Header from '../Header/Header';
import Board from '../Board/Board';

const Container = () => (
  <div className="container">
    <Header
      headerText="Start Taking Notes"
    />
    <Board />
    <Header
      headerText="About Us"
    />
  </div>
);

ReactDOM.render(<Container />, document.getElementById('root'));
