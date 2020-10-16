import React from 'react'
import { connect } from 'react-redux';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import './movieInfo.css'

const MovieInfo = ({ movie }) => {

    return (
        <div className="movieInfo">

            <div className="movieInfoHeader">
                <img className="reactMovie"
                    src={require("../../images/reactMovie_logo.png")}
                    alt="react.movie">
                </img>
                <img
                    src={require("../../images/tmdb_logo.png")}
                    alt="tmdb_logo">
                </img>

            </div>
            <div>
            </div>

            <div className="movieInfoContaier"
                style={{
                    background: movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')` : '#000'
                }}
            >
                <div className="movieinfoContent">
                    <div className="movieinfoImage">
                        <img src={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` :  require("../../images/no_image.jpg")} alt={movie.title}></img>
                    </div>
                    <div className="movieInfoTexts">
                        <h2>{movie.title}</h2>
                        <h3>PLOT</h3>
                        <p>
                            {movie.overview}
                        </p>
                        <h3>IMDB RATING</h3>
                        <div className="rmdb-rating">
                            <meter min="0" max="100" optimum="100" low="40" high="70" value={movie.vote_average * 10}></meter>
                            <p className="rmdb-score">{movie.vote_average}</p>
                        </div>
                        <h3>RUN TIME</h3>
                        <p>{`${movie.runtime} min`}</p>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    movie: state.movie.movie
})

export default connect(mapStateToProps)(MovieInfo);