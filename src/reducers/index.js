import { combineReducers } from 'redux';
import { ADD_MOVIES,ADD_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST } from "../actions";
const initialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false,
};
const initialSearchState = {
    result: {},
    showSearchResult: false,
}
export function movies (state=initialMovieState,action) {
    // if (action.type===ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITES:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter((movie)=> movie.Title!== action.movie.Title);
            return {
                ...state,
                favourites:filteredArray,
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val,
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list:[action.movie,...state.list]
            }
        default:
            return state;
    }
}

export function search (state=initialSearchState,action) {
    console.log("Search Reducer called");
    console.log(action.movie, " action movie");
    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResult: true,
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResult: false,
            }
    }
    return state;
}

// const initialRootReducerState={
//     movies:initialMovieState,
//     search:initialSearchState
// }
// export default function rootReducer(state=initialRootReducerState,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }

// }

export default combineReducers({
    movies:movies,
    search:search
})