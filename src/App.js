import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      color: "red"
    }
    return (
      <React.Fragment>
        <div style={style}>
          Hello, World
        </div>
       <div style={style}>
         Hello, World
       </div>
      </React.Fragment>
    );
  }
}

export default App;
