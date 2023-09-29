import React from 'react';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../redux/actions';

const Favorites = ({ favorites, removeFromFavorites }) => {
    const handleRemoveFromFavorites = (movieId) => {
        removeFromFavorites(movieId);
    };

    return (
        <div>
            <h2>Favorite Movies</h2>
            {favorites.length === 0 ? (
                <p>No favorite movies yet.</p>
            ) : (
                <ul>
                    {favorites.map((movieId) => (
                        <li key={movieId}>
                            {/* Display movie details here */}
                            <button onClick={() => handleRemoveFromFavorites(movieId)}>
                                Remove from Favorites
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
    };
};

const mapDispatchToProps = {
    removeFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);