import React, {useState, useEffect} from 'react';
import Card from './movies/card';

const Popular = () => {
    const [data, setData] = useState();
    const API_KEY = "5350325dd96de45edc142392b6373a75";

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

    console.log('popular#component#map#item', data && data.results.map(item => (
        <Card key={item.id} {...item}/>
    )));

    // if(data.length === 0) {
    //     return (
    //         <p>Loading...</p>
    // )}
    return (
        <div className="row">
            <div className="col-12">
                <h1>Popular</h1>
            </div>
            {data && data.results.map(item => (
                <Card key={item.id} {...item}/>
            ))}
        </div>
    );
}

export default Popular;