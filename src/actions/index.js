export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

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