import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CounterButton from './CounterButton'

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };


  render() {
    return (
      <div class="container">
        <div class="counter">
          <h3 class="title">Counter</h3>
          <p class="value">{this.state.count}</p>
        </div>
        <div class="action-buttons">
          <CounterButton title={"Reset"} action={this.resetCount} />
          <CounterButton title={"-"} action={this.decrementCount} />
          <CounterButton title={"+"} action={this.incrementCount} />
        </div>
      </div>
    );
  }
}


export default App;
