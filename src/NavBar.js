import './styles.css'
import React from 'react'
let currentPath = "";

function NavBar () {
    return (
        <ul>
            <li>
                <a href = {currentPath + '/'}>Home</a>
            </li>
            <li>
                <a href = {currentPath + '/rus'}>Rus</a>
            </li>
            <li>
                <a href = {currentPath + '/eng'}>Eng</a>
            </li>
        </ul>
    );
}

export default NavBar;