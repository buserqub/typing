import './styles.css';
import React from 'react';
import RuTextAdd from './RuTextAdd';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default class RuTrainer extends React.Component {
	render () {
        return (
            <div>
                <h1>Введите текст на русском языке, длиной не более 100 символов</h1>
                <input class = "text_input" id = "input" type="text"></input>
                <br></br>
                <Button onSmash={() => buttonClick(document.getElementById("input").value)}>
                    Отправить
                </Button>
            </div>
        )
    }
}