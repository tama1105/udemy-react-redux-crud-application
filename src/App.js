import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const style = {
      color: "red"
    }
    return (
      <Counter />
    );
  }
}

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  countUpHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  countDownHandler = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render(){
    return(
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.countUpHandler}>UP</button>
        <button onClick={this.countDownHandler}>DOWN</button>
      </React.Fragment>
    )
  }
}

export default App;
