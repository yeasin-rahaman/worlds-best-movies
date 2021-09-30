import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import '../Body/Body.css'

const Body = () => {
    const [movies, setMovies] = useState([]);
    // to set state in the carts
    const [cart, setCart] = useState([]);
    // state for event handler  send data to card
    const handleAddMovies = (movie) => {
        const newCart = [...cart, movie];
        setCart(newCart)
    }

    // fetch data 
    useEffect(() => {
        fetch("/movies.json")
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div>
            {/* movies body  */}
            <div className="row mt-4 m-3">
                <div className="col-md-9 ">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* movie loop  */}
                        {
                            movies.map(movie => <Movie
                                key={movie.key}
                                movie={movie}
                                handleAddMovies={handleAddMovies}
                            ></Movie>)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                    {/* Calculation  */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>


    );
};

export default Body;