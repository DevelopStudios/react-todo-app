import { Component } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
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
    </div>
  );
}
}

export default App;

