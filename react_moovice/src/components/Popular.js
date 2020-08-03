import React from 'react';
import Card from './movies/card';

const Popular = () => {
   return (
        <div className="row">
            <div className="col-12">
                <h1>Popular</h1>
            </div>
                <Card />
        </div>
    );
}

export default Popular;