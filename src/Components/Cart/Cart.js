import React from 'react';
import '../Cart/Cart.css'

const Cart = (props) => {
    const { cart } = props || {}

    // calculate total 
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.earn

    const total = cart.reduce(totalReducer, 0)


    return (
        <div className="">
            {/* cart  */}
            <div className="card cart-bg">
                <h3>  <i className="fas fa-film mt-5"></i> Number of Movies:  {cart.length} </h3>
                <hr className="line-for-cart" />

                <div className="movie-name ">
                    <h3 className="text-center pb-3">Movie name</h3>
                    <div className='cart-movie'>
                        <ul>
                            {
                                // cart price and name 
                                cart.map(movie =>
                                    <li className="d-flex p-3 line-for-cart" key={movie.key}> <img src={movie.img} alt="" height="100" width="100" className="pe-3" />
                                        <div> <b>{movie.name}</b>
                                            <br />
                                            <br />
                                            <small>Earns:  {movie.earn}$</small>
                                        </div>
                                    </li>)

                            }
                        </ul>
                    </div>
                </div>
                <br />
                <br />
                <hr className="line-for-cart" />
                <h4>Total Earn: {total} $</h4>

            </div>

        </div>
    )

};

export default Cart;







