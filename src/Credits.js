import './styles.css'
import React from 'react'

export default function Credits() {
    return (
        <footer>
            <hr></hr>
            <div className='footer'>
                <h2><span>Разработчики:</span></h2>
                <div className="credits">
                    <div className="developers">
                        <h3><span>Efimov A.I.</span></h3>
                    </div>
                    <div className="tutors">
                        <h3><span>Ilinyh G.V.</span></h3>
                    </div>
                    <div className="inspectors">
                        <h3><span>Bannikov R.Yu.</span></h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}