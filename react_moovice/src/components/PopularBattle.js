import React, { useState, useEffect } from 'react';
import Card from './movies/card';

const PopularBattle = () => {
    const [count, currentPage] = useState(1);
    const [data, setData] = useState();
    const API_KEY = "5350325dd96de45edc142392b6373a75";

    const nextPage = () => currentPage(count + 1);
    console.log('PopularBattle#components#nextPage()', nextPage)

    // ComponentDidMount equivalent
    useEffect(() => {
        async function fetchMovies() {
            const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr-FR&api_key=${API_KEY}`;
            const res = await fetch(url);
            res.json()
               .then(res => setData(res)) // On retourne le résultat dans setStates
        }
        // On retourne notre fetch
        fetchMovies();
    }, []);

    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <h1>Popular Battle</h1>
            </div>
            {data && data.results.slice(0, 2).map(item => (
                <Card key={item.id} onClick={nextPage} {...item} />
            ))}
        </div>
    );
}

export default PopularBattle;