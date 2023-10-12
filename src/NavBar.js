import './styles.css'
import React from 'react'


function NavBar () {
    return (
        <div>
            <div className='menu middle'>
                <div className='box'>
                    <div className='stick middle' name="s" id="s1"></div>
                    <div className='stick middle' name="s" id="s2"></div>
                    <div className='stick middle' name="s" id="s3"></div>
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
        </div>
        
    );
}

export default NavBar;