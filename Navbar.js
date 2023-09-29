import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ favorites }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites ({favorites.length})</Link>
                </li>
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
    };
};

export default connect(mapStateToProps)(Navbar);