import {combineReducers} from 'redux'
import home from './home-reducer'
import movie from './movie-reducer' 

const reducer = combineReducers({
    home,
    movie
})

export default reducer;