import question from './question.jpeg'
import './styles.css'
import React from 'react'

export default function EngTrainer() {
	return(
		<div>
			<h1 class = "main_text"><span id = "typed"></span><span id = "typing">S</span><span id = "text">tart typing! Dont stop! Continue! Almost there! You are close to the point! Victory!</span></h1>
			<br></br>
			<div class = "keyboard" id ="keyboard">
				<div class = "keyboard_row" id ="row_1">
					<div class = "key" id = "~">~</div>
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
					<div class = "key" id = "Q">Q</div>
					<div class = "key" id = "W">W</div>
					<div class = "key" id = "E">E</div>
					<div class = "key" id = "R">R</div>
					<div class = "key" id = "T">T</div>
					<div class = "key" id = "Y">Y</div>
					<div class = "key" id = "U">U</div>
					<div class = "key" id = "I">I</div>
					<div class = "key" id = "O">O</div>
					<div class = "key" id = "P">P</div>
					<div class = "key" id = "{">{"{"}</div>
					<div class = "key" id = "}">{"}"}</div>
					<div class = "flex_key" id = "|">|</div>
				</div>
				<div class = "keyboard_row" id ="row_3">
					<div class = "flex_key" id = "CL">CapsLock</div>
					<div class = "key" id = "A">A</div>
					<div class = "key" id = "S">S</div>
					<div class = "key" id = "D">D</div>
					<div class = "key" id = "F">F</div>
					<div class = "key" id = "G">G</div>
					<div class = "key" id = "H">H</div>
					<div class = "key" id = "J">J</div>
					<div class = "key" id = "K">K</div>
					<div class = "key" id = "L">L</div>
					<div class = "key" id = ":">:</div>
					<div class = "key" id = "&quot;">&quot;</div>
					<div class = "flex_key" id = "ENTER">Enter</div>
				</div>
				<div class = "keyboard_row"  id ="row_4">
					<div class = "flex_key" id = "LSHIFT">Shift</div>
					<div class = "key" id = "Z">Z</div>
					<div class = "key" id = "X">X</div>
					<div class = "key" id = "C">C</div>
					<div class = "key" id = "V">V</div>
					<div class = "key" id = "B">B</div>
					<div class = "key" id = "N">N</div>
					<div class = "key" id = "M">M</div>
					<div class = "key" id = "<">{"<"}</div>
					<div class = "key" id = ">">{">"}</div>
					<div class = "key" id = "?">?</div>
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
					<h2><span>Speed: </span><span id = "speed">-</span><span> СPM </span><img title = "CPM (Clicks Per Minute) - standart unit of measurement, characterized by frequency of clicks per minute" class = "sign" src={question}
					alt ="speed"></img></h2>
				</div>
				<div class = "speed">
					<h2><span>Accuracy: </span><span id = "accuracy">-</span><span> % </span><img title = "Percent right typed symbols from the all count of clicks" class = "sign" src={question} alt ="accuracy"></img></h2>
				</div>
			</div>
			<br></br>
		</div>
	);
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
	let string = "~!\"№;%:?*()_+";
	for (let i = 0; i < string.length; i++) {
		keys[i].innerHTML = string[i];
		keys[i].id = keys[i].innerHTML;
	}
    keys = document.getElementById("{");
	if (keys == null)
		keys = document.getElementById("[");
	if (keys != null) {
		keys.innerHTML = "{";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById("}");
	if (keys == null)
		keys = document.getElementById("]");
	if (keys != null) {
		keys.innerHTML = "}";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById(":");
	if (keys == null)
		keys = document.getElementById(";");
	if (keys != null) {
		keys.innerHTML = ":";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById("\"");
	if (keys == null)
		keys = document.getElementById('\'');
	if (keys != null) {
		keys.innerHTML = "\"";
		keys.id = keys.innerHTML;
	}

	keys = document.getElementById("&lt;");
	if (keys == null)
		keys = document.getElementById(",");
	if (keys != null) {
		keys.innerHTML = "<";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById("&gt;");
	if (keys == null)
		keys = document.getElementById(".");
	if (keys != null) {
		keys.innerHTML = ">";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById("?");
	if (keys == null)
		keys = document.getElementById("/");
	if (keys != null) {
		keys.innerHTML = "?";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById("|");
	if (keys == null)
		keys = document.getElementById("\\");
	if (keys != null) {
		keys.innerHTML = "|";
		keys.id = keys.innerHTML;
	}

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
	
    keys = document.getElementById("[");
	if (keys == null)
        keys = document.getElementById("{");
	if (keys != null) {
		keys.innerHTML = "[";
		keys.id = keys.innerHTML;
	}

    
    keys = document.getElementById("]");
	if (keys == null)
        keys = document.getElementById("}");
	if (keys != null) {
		keys.innerHTML = "]";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById(";");
	if (keys == null)
        keys = document.getElementById(":");
	if (keys != null) {
		keys.innerHTML = ";";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById('\'');
	if (keys == null)
        keys = document.getElementById("\"");
	if (keys != null) {
		keys.innerHTML = '\'';
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById(",");
	if (keys == null)
        keys = document.getElementById("&lt;");
	if (keys != null) {
		keys.innerHTML = ",";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById(".");
	if (keys == null)
        keys = document.getElementById("&gt;");
	if (keys != null) {
		keys.innerHTML = ".";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById("/");
	if (keys == null)
        keys = document.getElementById("?");
	if (keys != null) {
		keys.innerHTML = "/";
		keys.id = keys.innerHTML;
	}

    keys = document.getElementById("\\");
	if (keys == null)
    keys = document.getElementById("|");
	if (keys != null) {
		keys.innerHTML = "\\";
		keys.id = keys.innerHTML;
	}
	
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