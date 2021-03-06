import React from 'react';

class Icon extends React.Component {
    render() {
        return (
            <i class="material-icons">{this.props.name}</i>
        );
    }
}

export default Icon;