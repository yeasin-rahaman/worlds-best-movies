import React from 'react';
import '../Movie/Movie.css'

const Movies = (props) => {
    const { name, img, director, earn, leadingCast, type, year } = props.movie || {}
    return (
        <div className="col ">
            <div className="card h-100 movie-card">
                <img src={img} className="card-img-top cart-image p-2 cart-image" alt="..." />
                <div className="card-body">
                    <h4 className="card-title"><b>Name:</b> {name}</h4>
                    <h6><b>Director:</b> {director}</h6>
                    <h6><b>Leading Cast:</b> {leadingCast}</h6>
                    <h6><b>Type:</b> {type}</h6>
                    <h6><b>Year:</b> {year}</h6>
                    <h6><b>Earn:</b>$ {earn}</h6>
                </div>
                <div className="card-footer">
                    <button onClick={() => props.handleAddMovies(props.movie)} type="button" className="btn btn-hover color-1"> <i className="fas fa-cart-plus"></i> Add Movies</button>
                </div>
            </div>
        </div>

    );
};

export default Movies;