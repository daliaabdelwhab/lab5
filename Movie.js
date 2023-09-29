import React from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions';

const Movie = ({ movie, favorites, addToFavorites, removeFromFavorites }) => {
    const isFavorite = favorites.includes(movie.id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie.id);
        }
    };

    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <button onClick={handleToggleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
    };
};

const mapDispatchToProps = {
    addToFavorites,
    removeFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);