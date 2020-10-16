import { GET_MOVIES, LOAD_MORE_MOVIES, GET_MOVIE_INFO } from './actionTypes';
import axios from 'axios';
import { API_URL, API_KEY } from '../../config'

export const getMovies = async (searchTerm) => {
    let endpoint;
    if (searchTerm === "") {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    try {
        const request = await axios.get(endpoint)
        console.log("get movies", request.data)
        return {
            type: GET_MOVIES,
            payload: {
                request,
                searchTerm
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const loadMoreMovies = async (searchTerm, currentPage) => {
    let endpoint;
    if (searchTerm === "") {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
    } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage + 1}`;
    }
    try {
        const request = await axios.get(endpoint)
        console.log("load more", request.data)
        return {
            type: LOAD_MORE_MOVIES,
            payload: request.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const getMovieInfo = async (movieId) => {
    let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    try {
        const request = await axios.get(endpoint)
        console.log(request.data)
        return {
            type: GET_MOVIE_INFO,
            payload: {
                request
            }
        }

    } catch (error) {
        console.log(error)

    }
}