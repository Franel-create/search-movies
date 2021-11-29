import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
    const { movies = [] } = props;

    return (
        <div className='grid-cards'>
            {movies.length ? movies.map(movie => {
                return <Movie key={movie.imdbID} {...movie} />}) 
                : <h4>Movie not found! Try again</h4>
        }
        </div>
    )
}

export default Movies;