import './styles.css';
import React from 'react';
import {useEffect} from 'react';
import RuTextAdd from './RuTextAdd.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { buttonClick } from './Controller.js';
import eye from './images/eye.png';
import blink from './images/blink2.png';

function Image() {
    function HandleClick () {
        var input = document.getElementById('password');
        if (input != null) {
            if (input.type == 'password') {
                document.getElementsByClassName('password_control')[0].src = blink;
                input.type = 'text';
            } else {
                document.getElementsByClassName('password_control')[0].src = eye;
                input.type = 'password';
            }
            return false;
        }
	    return false;
    }
    return <img class = "password_control" onClick={HandleClick} src = {eye}></img>;
}
function Button () {
    async function HandleClick () {
        try {
            let user = {
                username: 'buser', //document.getElementById('login').value,
                password: 1234,//document.getElementById('password').value,
                email: 'buser@bk.ru'//document.getElementById('email').value,
            }
            const res = await fetch('http://localhost:3010/api/' + 'users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify (user)
            })
            let result = await res.json();
            return (result);
        }catch(err) {
            console.log(err);
        }
            

        /*let response = await fetch('http://localhost:3010/api/' + 'users', {method: "GET"});
        let result = await response.json();
        console.log(result);*/
    }
    return <button class = "registration_button" onClick = {HandleClick}>Зарегистрироваться</button>
}

export default class Registration extends React.Component {
	render () {
        return (
            <div class = "sign_up">
                <div class = "email">
                    <h1>Введите электронную почту</h1>
                    <input class = "field_input" id = "email" type="text"></input>
                </div>

                <div class = "login">
                    <h1>Введите логин</h1>
                    <input class = "field_input" id = "login" type="text"></input>
                </div>

                <div class = "password">
                    <h1>Введите пароль</h1>
                    <input class = "field_input" id = "password" placeholder="" type = "password"></input>
                    <Image></Image>
                </div>
                <Button></Button>


                <br></br>
            </div>
        )
    }
}