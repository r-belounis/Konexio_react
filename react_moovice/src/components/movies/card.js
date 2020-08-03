import React, { useState, useEffect } from 'react';

const Cards = ({props}) => {
    const [data, setData] = useState();
    // const [setErrors] = useState(false);

    // ComponentDidMount equivalent
    useEffect(() => {
        async function fetchMovies() {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr-FR&api_key=5350325dd96de45edc142392b6373a75');
            res.json()
               .then(res => setData(res)) // On retourne le résultat dans setStates
            //    .catch(err => setErrors(err)) // On voit si ça retourne des erreurs
        }
        // On retourne notre fetch
        fetchMovies();
    }, []);

    return (
        <>
            {data && data.results.map(item => (
                <div key={item.id} className="col-3">
                    <div className="card">
                        <img src={'https://image.tmdb.org/t/p/original/'+ item.poster_path} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.overview}</p>
                            <p className="card-text">{item.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Cards;