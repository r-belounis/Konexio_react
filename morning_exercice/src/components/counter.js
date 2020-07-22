import React from 'react';

class Counter extends React.Component {
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
          <>
            <h2>{this.props.counter}</h2>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.props.incrementFn}
            >
            +
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.props.decrementFn}
            >
            -
            </button>
          </>
        );
      }
}

export default Counter;
