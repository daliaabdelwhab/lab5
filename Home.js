import React from 'react';
import Movie from './Movie';

const Home = () => {
    const movies = [
        { id: 1, title: 'Movie 1', description: 'Description 1' },
        { id: 2, title: 'Movie 2', description: 'Description 2' },
        { id: 3, title: 'Movie 3', description: 'Description 3' },
    ];

    return (
        <div>
            <h2>Movie List</h2>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default Home;