import React, { useState } from 'react';
import CardBattle from './movies/cardBattle';

const PopularBattle = () => {
    const [currentPage, count] = useState(1);

    const onClick = () => {
        console.log("added film", currentPage + 1);
        // currentPage + 1;
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <h1>Popular Battle</h1>
            </div>
            <CardBattle onClick={() => currentPage(console.log("added film", count + 1), count + 1)} />
        </div>
    );
}

export default PopularBattle;