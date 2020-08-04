import React, { Component } from 'react';
import Add from './Components/Add.js'
import List from './Components/List.js'
import Pay from './Components/Pay.js'
import Button from './Components/Core/Button.js'
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialise main App
class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: "Add",
        items: []
      };

      this.onClickTabAdd = this.onClickTabAdd.bind(this);
      this.onClickTabList = this.onClickTabList.bind(this);
      this.onClickTabPay = this.onClickTabPay.bind(this);
      this.onAdd = this.onAdd.bind(this);
    }

    onClickTabAdd() {
      this.setState({
        activeTab: 'Add'
      });
    }

    onClickTabList() {
      this.setState({
        activeTab: 'List'
      });
    }

    onClickTabPay() {
      this.setState({
        activeTab: 'Pay'
      });
    }

    onAdd(price, input) {
      console.log('App#onAdd');
      console.log('App#onAdd price', price);
      console.log('App#onAdd input', input);
      const items = this.state.items;

      items.push({
          input,
          price
      });

      this.setState({
          items,
          activeTab: 'list'
      });
      // go the other page
    }

    render() {

      const {
        activeTab
      } = this.state;

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto">
              <Button isSelected={activeTab === "Add"} onClick={this.onClickTabAdd}>
                Add
              </Button>
            </div>
            <div className="col-auto">
              <Button isSelected={activeTab === "List"} onClick={this.onClickTabList}>
                List
              </Button>
            </div>
            <div className="col-auto">
              <Button isSelected={activeTab === "Pay"} onClick={this.onClickTabPay}>
                Pay
              </Button>
            </div>
          </div>

          {activeTab === 'Add' && <Add />}
          {activeTab === 'List' && <List />}
          {activeTab === 'Pay' && <Pay />}

        </div>
      );
    }
}

export default App;