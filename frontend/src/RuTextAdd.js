import React from 'react';
import Controller from './Controller';
import { buttonClick } from './Controller.js';

function Button({ onSmash, children }) {
    return <button onClick={onSmash}>{children}</button>;
}

export default function RuTextAdd() {
    return (
        <div>
            <h1>Введите текст на русском языке, длиной не более 100 символов</h1>
            <input class = "text_input" id = "input" type="text"></input>
            <br></br>
            <Button onSmash={() => buttonClick(document.getElementById("input").value)}>
                Отправить
            </Button>
        </div>
    );
}