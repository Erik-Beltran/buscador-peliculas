import { GET_MOVIE_INFO } from '../actions/actionTypes'

const initialState = {
  movie: "",
  directors: [],

};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_INFO:
  console.log("object")
      return {
        ...state,
        movie: action.payload.request.data
      }
    default:
      return state
  }
}
export default movieReducer;