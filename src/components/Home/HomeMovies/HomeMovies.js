import React from 'react'
import { connect } from 'react-redux'
import Movie from '../../Movie/Movie'
import './homeMovies.css'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../config';
import { getMovieInfo } from '../../../redux/actions/actions';

const HomeMovies = ({ movies, title, getMovieInfo }) => {

    title === "" ? title = "Popular Movies" : title = "Search Term"
    console.log("movies", movies)

    return (
        <div className="homeMovies">
            <h2>{title}</h2>
            <div className="movieList">
                {
                    movies.map(element => {
                        return (
                            <div key={element.id} className="movieList-item" onClick={() => getMovieInfo(element.id)}>
                                <Movie
                                    image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : require("../../../images/no_image.jpg")}
                                    movieId={element.id}
                                    movieName={element.original_title}
                                    title={element.title}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.home.movies,
    title: state.home.searchTerm,
})

export default connect(mapStateToProps, { getMovieInfo })(HomeMovies)

