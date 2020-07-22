import React from 'react';
import Title from './title';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Konexio</h1>
        <Title bg="blue" studentName="Didier" age="42"/>
        <Title bg="red" studentName="Emad" age="26"/>
        <Title bg="green" studentName="Reza" age="32"/>
      </div>
    )
  }
}

export default App;