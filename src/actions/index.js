export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies:movies,
    }
}

export function addFavourites(movie) {
    return {
        type: ADD_FAVOURITES,
        movie:movie,
    }
}

export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie:movie,
    }
}

export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val:val,
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => dispatch(addMovieSearchResult(movie)));
    }
}

export function addMovieSearchResult(movie) {
    return {
        type:ADD_SEARCH_RESULT,
        movie,
    }
}

export function addMovieToList(movie){
    return {
        type:ADD_MOVIE_TO_LIST,
        movie
    }

}