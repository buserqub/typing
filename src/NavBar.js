import './styles.css'
import React from 'react'


function NavBar () {
    return (
        <header>
            <div className='menu middle'>
                <div className='box'>
                    <ul>
                        <li>MENU</li>
                    </ul>
                </div>
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
            </div>
        </header>
        
    );
}

export default NavBar;