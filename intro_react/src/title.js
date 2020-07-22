import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <>
        <p style={{backgroundColor: this.props.bg}}>{this.props.studentName} à {this.props.age}</p>
      </>
    )
  }
}

export default Title;