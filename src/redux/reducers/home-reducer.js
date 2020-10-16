// import {
//     // SHOW_LOADING_SPINNER,
//     // CLEAR_MOVIES,
//     // SEARCH_MOVIES,
//     // GET_POPULAR_MOVIES,
//     // LOAD_MORE_MOVIES,
//     GET_MOVIES
//     // SET_POPULAR_PERSISTED_STATE
// } from '../actions/index.js';

import { GET_MOVIES, LOAD_MORE_MOVIES } from '../actions/actionTypes'


const initialState = {
    movies: [],
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: "",
}


const homeReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case GET_POPULAR_MOVIES:
    //         return {
    //             ...state,
    //             movies: action.payload.results,
    //             loading: false,
    //             currentPage: action.payload.page,
    //             totalPages: action.payload.total_pages,
    //             searchTerm: ""
    //         }

    //     case LOAD_MORE_MOVIES:
    //         return {
    //             ...state,
    //             movies: [...state.movies, ...action.payload.results],
    //             loading: false,
    //             currentPage: action.payload.page,
    //             totalPages: action.payload.total_pages
    //         }

    //     case SEARCH_MOVIES:
    //         return {
    //             ...state,
    //             movies: action.payload.results,
    //             loading: false,
    //             currentPage: action.payload.page,
    //             totalPages: action.payload.total_pages,
    //             searchTerm: action.payload.searchTerm
    //         }

    //     case CLEAR_MOVIES:
    //         return {
    //             ...state,
    //             movies: []
    //         }
    //     case SHOW_LOADING_SPINNER:
    //         return {
    //             ...state,
    //             loading: true
    //         }

    //     default:
    //         return state
    // }

    switch (action.type) {
        case GET_MOVIES:
            
            // let { request, searchTerm } = action.payload;
            return {
                ...state,
                movies: action.payload.request.data.results,
                searchTerm: action.payload.searchTerm
            }

        case LOAD_MORE_MOVIES:
            return {
                ...state,
                movies: [...state.movies, action.payload.request.data.results],
                currentPage: action.payload.request.data.page
            }

        default:
            return state;
    }
}

export default homeReducer;