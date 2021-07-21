import { Component } from "react";

class CounterButton extends Component {
  render() {
    return <button onClick={this.props.action}>{this.props.title}</button>;
  }
}

export default CounterButton