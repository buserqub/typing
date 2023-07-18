import './styles.css'
import React from 'react'

function NavBar () {
    return (
        <ul>
            <li>
                <a href = '/'>Home</a>
            </li>
            <li>
                <a href = '/rus'>Rus</a>
            </li>
            <li>
                <a href = '/eng'>Eng</a>
            </li>
        </ul>
    );
}

export default NavBar;