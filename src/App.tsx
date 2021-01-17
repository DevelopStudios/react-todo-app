import { Component } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import TaskList from "./Banner/TaskList/TaskList";
class App extends Component {
  state = {
    mode: 'day'
  }

  toggleDayNight = () => {
    if(this.state.mode === 'day'){
      this.setState({mode: 'night'});
    } else {
      this.setState({mode:'day'});
    }
  }
    render() {
  return (
    <div className="app-container">
      <Banner clickHandler={this.toggleDayNight} day={this.state.mode}/>
      <TaskList mode={this.state.mode}></TaskList>
    </div>
  );
}
}

export default App;

