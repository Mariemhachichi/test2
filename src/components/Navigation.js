import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='Navigation' >
            <ul>
                <NavLink to="/">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/About">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div >
    );
};

export default Navigation;