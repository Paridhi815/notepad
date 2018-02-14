import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';

class Container extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
