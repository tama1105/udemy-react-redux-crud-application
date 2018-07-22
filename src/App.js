import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     const style = {
//       color: "red"
//     }
//     return (
//       <React.Fragment>
//         <div style={style}>
//           Hello, World
//         </div>
//        <div style={style}>
//          Hello, World
//        </div>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Tom", age: 20 },
    { name: "HogeHoge"}
  ]
  return(
    <div>
      {
        profiles.map((p, i) => {
          return <User name={p.name} age={p.age} key={i}></User>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Name: {props.name}, Age: {props.age}</div>
}

User.propTypes = {//型チェックできる
  name: PropTypes.string,
  // age: PropTypes.number//ageを記述してないことに対するエラーは表示されない
  age: PropTypes.number.isRequired//ageは必須になる
}

export default App;
