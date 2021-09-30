import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header">
            {/* header  */}
            <h1 className="fw-bold">Worlds Best Movies</h1>
            <br />
            <p>Cinema is the most beautiful fraud in the world. If you want a happy ending, that depends, of course, on where you stop your story. Cinema is a matter of what's in the frame and what's out.</p>
            <hr />
            <h3 className="">Total Budget: 100 Million</h3>
        </div>
    );
};

export default Header;