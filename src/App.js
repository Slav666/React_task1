import React, {Component} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "superMax",
    
  }

  userNameChangeHandler = (event) => {
      this.setState({username: event.target.value});
      
  }
  render() {
  return (
    <div className="App">
    <UserInput changed={this.userNameChangeHandler} currentName={this.state.userName} />
    <UserOutput UserName={this.state.username} />
    <UserOutput UserName="Max" />
    <UserOutput UserName="Max" />
      
    </div>
  );
  }
}

export default App;
