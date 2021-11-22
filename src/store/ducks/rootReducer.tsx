import { combineReducers } from "redux";
import data from './books';
import authors from './authors'

export default combineReducers({
    data,
    authors
})