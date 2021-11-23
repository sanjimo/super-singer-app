import React from 'react';
import './Header.css';

//header function
const Header = () => {
    return (
        <div className="header-container">
            <h2 className="header-title"><i class="fas fa-music"></i> Super Singer Concert <i class="fas fa-music"></i></h2><br/>
            <h6 className="header-info">Music in the soul can be heard by the universe! </h6>
            <h4 className="header-budget"><span className="highlighted-color">Concert Budget</span> : $1000000</h4>
            <nav>
             <a href="/home">Home</a>
             <a href="/singers">Singers</a>
             <a href="/contact">Contact Us</a>
             <a href="/about">About Us</a>
         </nav>
        </div>
    );
};

export default Header;