import React from 'react';
import Controller from './Controller';
import { buttonClick } from './Controller.js';

function Button () {
    async function HandleClick () {
        try {
            let text = document.getElementById("input").value;
            let data = {
                text: text
            }
            const res = await fetch('http://localhost:3010/api/' + 'text/rus', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify (data)
            });
            const result = await res.json()
            .then ((result) =>
            {
                if (result.sqlState)
                    if (result.sqlState == '45000')
                        alert(result.sqlMessage);
                if (result.message == 'Success')
                        alert('Текст успешно добавлен в базу данных')
                else throw (new Error());
            });

        } catch(err) {
            console.log(err);
        }

        /*let response = await fetch('http://localhost:3010/api/' + 'users', {method: "GET"});
        let result = await response.json();
        console.log(result);*/
    }
    return <button onClick = {HandleClick}>Отправить</button>
}

export default function RuTextAdd() {
    return (
        <div>
            <h1>Введите текст на русском языке, длиной не более 100 символов</h1>
            <input class = "text_input" id = "input" type="text"></input>
            <br></br>
            <Button></Button>
        </div>
    );
}