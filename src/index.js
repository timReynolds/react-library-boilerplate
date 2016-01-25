import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.update = this.update.bind(this);
  }
  update(value) {
    this.setState({ count: this.state.count + value });
  }
  render() {
    return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={function inc() {this.update(1);}}>+1</button>
          <button onClick={function dec() {this.update(-1);}}>-1</button>
        </div>
      );
  }
}
