import React, { Component } from 'react';
import Counter from './components/counter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount = () => {
    this.setState({counter: this.state.counter + 1});
    console.log('the button incremented');
  }

  decrementCount = () => {
    this.setState({counter: this.state.counter - 1});
    console.log('the button decremented');
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>counter</h1>
        <Counter
          incrementFn={this.incrementCount}
          decrementFn={this.decrementCount}
        />
      </div>
    );
  }
}

export default App;