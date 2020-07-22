import React from 'react';
import Icon from './core/Icon';

class HeartRate extends React.Component {
    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name="favorite" style={{fontSize: 100, color: 'red'}}/>
                <p>{this.props.heart}</p>
            </div>
        );
    }
}

export default HeartRate;