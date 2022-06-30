import React, {Component} from 'react';
// import './App.css';
// import FirstComponent from './components/learning-examples/FirstComponent';
// import SecondComponent from './components/learning-examples/SecondComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';
// import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <FirstComponent></FirstComponent> */}
        <TodoApp />
      </div>
    );
  }
}

// class LearningCompnents extends Component {
//   render() {
//     return (
//       <div className="LearningCompnents">
//         My Hello World
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }

export default App;