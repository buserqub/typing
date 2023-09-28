import './styles.css'
import React from 'react'
import slide1 from './images/slide1.png'
import slide2 from './images/slide2.png'
import slide3 from './images/slide3.png'

function Home () {
    return (
        <div>
            <h1>Приветствую!</h1>
            <h1>Небольшое руководство по эксплуатации</h1>
            
            <div>
                <div className = "slider middle">
                    <div className = "slides">
                        <input type="radio" name = "r" id="r1" defaultChecked></input>
                        <input type="radio" name = "r" id="r2"></input>
                        <input type="radio" name = "r" id="r3"></input>

                        <div className = "slide s1">
                            <div>
                                <h3>Выберите язык</h3>
                                <img src = {slide1} alt = ""></img>
                            </div>
                        </div>
                        <div className = "slide">
                            <div>
                                <h3>Смотрите подсказки по вводу</h3>
                                <img src = {slide2} alt = ""></img>
                            </div>
                        </div>
                        <div className = "slide">
                            <div>
                                <h3>Печатайте!</h3>
                                <img src = {slide3} alt = ""></img>
                            </div>
                        </div>
                    </div>
                    <div className = "navigation">
                        <label htmlFor = "r1" className = "bar"></label>
                        <label htmlFor = "r2" className = "bar"></label>
                        <label htmlFor = "r3" className = "bar"></label>
                    </div>
                    <button class="btn prev"><p>{"<"}</p></button>
                    <button class="btn next"><p>{">"}</p></button>
                </div>
            </div>
        </div>
    );
}

export default Home;