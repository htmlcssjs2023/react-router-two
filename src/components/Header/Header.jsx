import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';

const Header = () => {
    return (
        // <nav>
        //     <Link to="/">Home</Link>
        //     <Link to="/about">About</Link>
        //     
        // </nav>
        
          <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/services">Services</ActiveLink>
        </nav>

       
    );
};

export default Header;