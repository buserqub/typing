import question from './question.jpeg'
import './styles.css'
import React from 'react'

export default function RusTrainer() {
	return (
		<div>
			<h1 class = "main_text"><span id = "typed"></span><span id = "typing">Н</span><span id = "text">ачните печать! Не останавливайтесь! Продолжайте! Уже почти! Вы близки к цели! Победа!</span></h1>
			<br></br>
			<div class = "keyboard" id ="keyboard">
				<div class = "keyboard_row" id ="row_1">
					<div class = "key" id = "Ё">Ё</div>
					<div class = "key" id = "1">1</div>
					<div class = "key" id = "2">2</div>
					<div class = "key" id = "3">3</div>
					<div class = "key" id = "4">4</div>
					<div class = "key" id = "5">5</div>
					<div class = "key" id = "6">6</div>
					<div class = "key" id = "7">7</div>
					<div class = "key" id = "8">8</div>
					<div class = "key" id = "9">9</div>
					<div class = "key" id = "0">0</div>
					<div class = "key" id = "_">_</div>
					<div class = "key" id = "+">+</div>
					<div class = "flex_key" id = "BS">Backspace</div>
				</div>
				<div class = "keyboard_row"  id ="row_2">
					<div class = "flex_key" id = "TAB">Tab</div>
					<div class = "key" id = "Й">Й</div>
					<div class = "key" id = "Ц">Ц</div>
					<div class = "key" id = "У">У</div>
					<div class = "key" id = "К">К</div>
					<div class = "key" id = "Е">Е</div>
					<div class = "key" id = "Н">Н</div>
					<div class = "key" id = "Г">Г</div>
					<div class = "key" id = "Ш">Ш</div>
					<div class = "key" id = "Щ">Щ</div>
					<div class = "key" id = "З">З</div>
					<div class = "key" id = "Х">Х</div>
					<div class = "key" id = "Ъ">Ъ</div>
					<div class = "flex_key" id = "/">/</div>
				</div>
				<div class = "keyboard_row" id ="row_3">
					<div class = "flex_key" id = "CL">CapsLock</div>
					<div class = "key" id = "Ф">Ф</div>
					<div class = "key" id = "Ы">Ы</div>
					<div class = "key" id = "В">В</div>
					<div class = "key" id = "А">А</div>
					<div class = "key" id = "П">П</div>
					<div class = "key" id = "Р">Р</div>
					<div class = "key" id = "О">О</div>
					<div class = "key" id = "Л">Л</div>
					<div class = "key" id = "Д">Д</div>
					<div class = "key" id = "Ж">Ж</div>
					<div class = "key" id = "Э">Э</div>
					<div class = "flex_key" id = "ENTER">Enter</div>
					</div>
				<div class = "keyboard_row"  id ="row_4">
					<div class = "flex_key" id = "LSHIFT">Shift</div>
					<div class = "key" id = "Я">Я</div>
					<div class = "key" id = "Ч">Ч</div>
					<div class = "key" id = "С">С</div>
					<div class = "key" id = "М">М</div>
					<div class = "key" id = "И">И</div>
					<div class = "key" id = "Т">Т</div>
					<div class = "key" id = "Ь">Ь</div>
					<div class = "key" id = "Б">Б</div>
					<div class = "key" id = "Ю">Ю</div>
					<div class = "key" id = ",">,</div>
					<div class = "flex_key" id = "RSHIFT">Shift</div>
					</div>
				<div class = "keyboard_row" id ="row_5">
					<div class = "flex_key" id = "LCTRL">Ctrl</div>
					<div class = "flex_key" id = "WIN">Win</div>
					<div class = "flex_key" id = "LALT">Alt</div>
					<div class = "space_key" id = "SPACE">Space</div>
					<div class = "flex_key" id = "RALT">Alt</div>
					<div class = "flex_key" id = "FN">Fn</div>
					<div class = "flex_key" id = "RCTRL">Ctrl</div>
					</div>
			</div>
			<div class = "stats">
				<div class = "speed">
					<h2><span>Скорость: </span><span id = "speed">-</span><span> СPM </span><img  title = "CPM (Clicks Per Minute) - стандартная единица измерения скорости, характеризующаяся частотой нажатий клавиш в минуту" class = "sign" src={question} alt ="speed"></img></h2>
				</div>
				<div class = "speed">
					<h2><span>Точность: </span><span id = "accuracy">-</span><span> % </span><img  title = "Процент правильно введенных символов от общего количества нажатий клавиш" class = "sign" src={question} alt = "accuracy"></img></h2>
				</div>
			</div>
			<br></br>
		</div>
	)
}
function init () {
	let cursor = document.getElementById("typing");
	if (cursor.innerHTML === cursor.innerHTML.toUpperCase() && cursor.innerHTML !== " ")
		toUpper();
	else
		toLower();
	highlight(cursor.innerHTML);
}

let startdate = new Date();
let clockStart = startdate.getTime();
function refreshStopwatch() {
	startdate = new Date();
	clockStart = startdate.getTime();
}

function initStopwatch() { 
	var thisTime = new Date();
	return (thisTime.getTime() - clockStart)/1000;
}
function clear() {
	let key = document.getElementsByClassName("pressed_key");
	if (key[0] != null) {
		key[0].className = "key";
	}
	key = document.getElementsByClassName("pressed_space_key");
	if (key[0] != null) {
		key[0].className = "space_key";
	}
	key = document.getElementsByClassName("pressed_flex_key");
	if (key[0] != null) {
		for (let i = 0; i < key.length; i++)
			key[i].className = "flex_key";
	}
}
function toUpper () {
	let keys = document.getElementsByClassName("key");
	for (let i = 0; i < keys.length; i++) {
		keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
		keys[i].id = keys[i].innerHTML;
	}
	let string = "Ё!\"№;%:?*()_+";
	for (let i = 0; i < string.length; i++) {
		keys[i].innerHTML = string[i];
		keys[i].id = keys[i].innerHTML;
	}
	keys = document.getElementById(",");
	if (keys == null)
		keys = document.getElementById(".");
	keys.innerHTML = ",";
	keys.id = keys.innerHTML;

	keys = document.getElementsByClassName("flex_key");
	keys[2].innerHTML = "/";
	keys[2].id = keys.innerHTML;

	keys = document.getElementById("LSHIFT");
	highlightSpecial(keys.innerHTML, keys.className, keys.id);
}
function toLower () {
	let keys = document.getElementsByClassName("key");
	for (let i = 0; i < keys.length; i++) {
		keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
		keys[i].id = keys[i].innerHTML;
	}
	let string = "ё1234567890-=";
	for (let i = 0; i < string.length; i++) {
		keys[i].innerHTML = string[i];
		keys[i].id = keys[i].innerHTML;
	}
	keys = document.getElementById(".");
	if (keys == null)
		keys = document.getElementById(",");
	keys.innerHTML = ".";
	keys.id = keys.innerHTML;

	keys = document.getElementsByClassName("flex_key");
	keys[2].innerHTML = "\\";
	keys[2].id = keys.innerHTML;
	
}
function moveCursor (e) {
	let cursor = document.getElementById("typing");
	if (cursor == null)
		cursor = document.getElementById("typing_wrong");

	if (e.key === cursor.innerHTML) {
		typedSymbols++;
		let typed = document.getElementById("typed");
		let text = document.getElementById("text");

		typed.innerHTML += cursor.innerHTML;
		cursor.innerHTML = text.innerHTML.substring(0, 1);
		text.innerHTML = text.innerHTML.slice(1);
		cursor.id = "typing";
		clear();
		if (cursor.innerHTML === "") {
			refreshText();
			init();
		}
		else
			if (cursor.innerHTML === cursor.innerHTML.toUpperCase() && cursor.innerHTML !== " ")
				toUpper();
			else
				toLower();

		highlight(cursor.innerHTML);
	} else {
		errors++;
		cursor.id = "typing_wrong";
	}
}
function highlightSpecial (name, className, id) {
	let key = document.getElementById(id);
	key.className = "pressed_" + className;
	key.innerHTML = name;
}
function highlight (symbol) {
	if (symbol === " ") {
		let key = document.getElementById("SPACE");
		key.className = "pressed_space_key";
		key.innerHTML = "Space";
	}
	else {
		let key = document.getElementById(symbol);
		key.className = "pressed_key";
		key.innerHTML = symbol;
	}
}
function refreshText () {
	let cursor = document.getElementById("typing");
	let typed = document.getElementById("typed");
	let text = document.getElementById("text");

	cursor.innerHTML = typed.innerHTML.substring(0, 1);
	text.innerHTML = typed.innerHTML.slice(1);
	typed.innerHTML = "";
}

let typedSymbols = 0;
let errors = 0;
document.onkeydown = function (e) {
	console.log(e.key);
		if (e.key === "Shift" || e.key === "Alt" || e.key === "Ctrl" || e.key === "Win" || e.key === "Tab" || e.key === "CapsLock")
			return;
		for (let i = 1; i <= 12; i++) {
			if (e.key === "F" + String(i)) 
				return;
		}
	    let typed = document.getElementById("typed");
        if (typed.innerHTML === "") {
            refreshStopwatch();
            typedSymbols = 0;
            errors = 0;
        }
        moveCursor(e);
        if (typedSymbols !== 1)
            document.getElementById("speed").innerHTML = String(Math.round(typedSymbols / initStopwatch() * 60));
        document.getElementById("accuracy").innerHTML = String(Math.round((typedSymbols - errors) / typedSymbols * 100));
    }