import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.update = this.update.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  update(value) {
    this.setState({ count: this.state.count + value });
  }
  increment() {
    return this.update(1);
  }
  decrement() {
    return this.update(-1);
  }
  render() {
    return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>
        </div>
      );
  }
}
