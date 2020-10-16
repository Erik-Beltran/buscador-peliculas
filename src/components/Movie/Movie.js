import React from 'react'
import { Link } from 'react-router-dom';
import './movie.css'

const Movie = ({movieId, movieName, image, title}) => {
    return (
        <div className="movieItem">
            <Link to={{ pathname: `/${movieId}`,  movieName: `${movieName}`}}>
            <img className="clickable" src={image} alt="moviethumb" />
            <h3>{title}</h3>
            </Link>
        </div>
    )
}

export default Movie;