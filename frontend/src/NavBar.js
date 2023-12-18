import './styles.css'
import React from 'react'

function NavBar () {
    return (
        <ul>
            <li>
                <a href = '/'>Home</a>
            </li>
            <li>
                <a href = '/ru'>Rus</a>
            </li>
            <li>
                <a href = '/eng'>Eng</a>
            </li>
            <li>
                <a href = '/reg'>Sign up</a>
            </li>
            <li>
                <a href = '/auth'>Sign in</a>
            </li>
        </ul>
    );
}

export default NavBar;