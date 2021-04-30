import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, genres, summary, poster}) {
    return (
        <div>
            <h5>{title}</h5>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie
