import './styles.css'
import React from 'react'
import slide1 from './images/slide1.png'
import slide2 from './images/slide2.png'
import slide3 from './images/slide3.png'
import fiva from './images/ФЫВАОЛДЖ.png'
import speed from './images/Скоропись.png'

function Home () {
    return (
        <div>
            <h1>Приветствую!</h1>
            <h1>Небольшое руководство по эксплуатации</h1>
            
            <div>
                <div className = "slider middle">
                    <input type="radio" name = "r" id="r1"></input>
                    <input type="radio" name = "r" id="r2"></input>
                    <input type="radio" name = "r" id="r3"></input>
                    <input type="radio" name = "r" id="r4"></input>
                    <div className = "slides s1">
                        <div className = "slide">
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
                        <label htmlFor = "r1" className = "bar" id = "lb1"></label>
                        <label htmlFor = "r2" className = "bar" id = "lb2"></label>
                        <label htmlFor = "r3" className = "bar" id = "lb3"></label>
                    </div>
                </div>
                <div className='content middle'>
                    <div className='upperBlock'>
                        <div className='leftBlock'>
                            <img src = {fiva}></img>
                        </div>
                        <div className='rightBlock'>
                            <p>"ФЫВА ОЛДЖ" - современный подход к расположению пальцев на клавиатуре, призванный
                                увеличить эфективность скоростной слепой печати. Данный подход подразумевает под собой
                                такое расположение пальцев, при котором пальцы левой руки от мизинца до указательного занимают позиции
                                "ФЫВА" и отвечают за нажатие клавишь в соответствующих вертикальных последовательностях, а пальцы
                                правой руки от указательного до мизинца - "ОЛДЖ" соответственно.
                            </p>
                        </div>
                    </div>
                    <div className='bottomBlock'>
                        <div className='leftBlock'>
                            <p>Обученный такой методике набора пользователь может достигать скорости нажатий до 300-400
                                символов в минуту, при этом текущие зафиксированные рекорды скоростной печати составляют 900
                                символов в минуту для зранее неизвестного текста и 1200 для заранее известного.
                            </p>
                        </div>
                        <div className='rightBlock'>
                            <img src = {speed}></img>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;