export const addToFavorites = (movieId) => {
    return {
        type: 'ADD_TO_FAVORITES',
        payload: movieId,
    };
};

export const removeFromFavorites = (movieId) => {
    return {
        type: 'REMOVE_FROM_FAVORITES',
        payload: movieId,
    };
};
