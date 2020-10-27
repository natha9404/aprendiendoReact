import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function Hello (props) {
// return <h2>{props.tittle}</h2>
// }

// const Hello = (props) => <h2>{props.tittle}</h2>

class Hello extends Component {

  render () {
  return <h2>{this.props.tittle}</h2>
  }

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello tittle='Hello from props' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
