import rhand1 from './images/rhand1.png'
import rhand2 from './images/rhand2.png'
import rhand3 from './images/rhand3.png'
import rhand4 from './images/rhand4.png'
import rhand5 from './images/rhand5.png'

import lhand1 from './images/lhand1.png'
import lhand2 from './images/lhand2.png'
import lhand3 from './images/lhand3.png'
import lhand4 from './images/lhand4.png'
import lhand5 from './images/lhand5.png'

import dataEng from './dataEng.json'
import dataRus from './dataRus.json'
import './styles.css'

const rus = "rus";
const eng = "eng";
const upper = "upper";
const lower = "lower";

let link = "http://localhost:3000/";
let registryState = upper;
let state = rus;

/*function switchHand(id) {
	let rows = document.getElementsByClassName("keyboard_row");
	for (let i = 0; i < rows.length; i++) {
		if (rows[i] !== null) {
			let cursor = 0;
			let row = document.getElementsByClassName("pressed_flex_key");
			if (row === null)
				row = document.getElementsByClassName("pressed_key");
			if (row !== null) {
				console.log(rows, rows[i], row, row[0]);
				switch (i) {
					case 0:
						cursor = 6;
						break;
					case 1:
						cursor = 5;
						break;
					case 2:
						cursor = 5;
						break;
					case 3:
						cursor = 5;
						break;
				}
				for (let j = 0; j < row.length; j++) {
					console.log(row[j]);
					if (rows[i].getElementsById(row[j].id) === row[j])
						if (j <= cursor) {
							switch (cursor - j) {
								case 0:
									spawnHand(lhand4);	
									break;
								case 1:
									spawnHand(lhand4);	
									break;
								case 2:
									spawnHand(lhand3);	
									break;
								case 3:
									spawnHand(lhand2);	
									break;
								default:
									spawnHand(lhand1);
							}		
						} else {
							switch (j - cursor) {
								case 1:
									spawnHand(rhand1);	
									break;
								case 2:
									spawnHand(rhand2);	
									break;
								case 3:
									spawnHand(rhand3);	
									break;
								case 4:
									spawnHand(rhand4);	
									break;
								default:
									spawnHand(rhand4);
							}	
						}
				}
			}
		}
	}
}*/

function switchHand(id) {
	let key = document.getElementById(id);
	let row = key.closest("div.keyboard_row");
	let rows = document.getElementsByClassName("keyboard_row");
	let cursor = 0;
	for (let i = 0; i < rows.length; i++) {
		if (rows[i] === row) {
			switch (i) {
				case 0:
					cursor = 6;
					break;
				case 1:
					cursor = 5;
					break;
				case 2:
					cursor = 5;
					break;
				case 3:
					cursor = 5;
					break;
			}
		}
	}
	for (let i = 0; i < rows.length; i++) {
		rows = row.getElementsByTagName("div");
		if (rows[i] === key)
			if (i <= cursor) {
				switch (cursor - i) {
					case 0:
						spawnHand(lhand4, key);
						break;
					case 1:
						spawnHand(lhand4, key);	
						break;
					case 2:
						spawnHand(lhand3, key);	
						break;
					case 3:
						spawnHand(lhand2, key);	
						break;
					default:
						spawnHand(lhand1, key);
						break;
				}		
			} else {
				switch (i - cursor) {
					case 1:
						spawnHand(rhand2, key);	
						break;
					case 2:
						spawnHand(rhand2, key);	
						break;
					case 3:
						spawnHand(rhand3, key);	
						break;
					case 4:
						spawnHand(rhand4, key);	
						break;
					default:
						spawnHand(rhand5, key);
						break;
				}	
			}
	}
}
function spawnHand(hand, key) {
	let elem = document.createElement('div');
	elem.className = "hand";
	elem.style.top = 0 + "px";
	elem.style.left = 0 + "px";
	let img = document.createElement('img');
	img.src = hand;
	elem.append(img);
	let block = document.getElementById("hands");
	block.append(elem);
	let rect = key.getBoundingClientRect();
	console.log(elem.top);
	elem.style.top = rect.top + 'px';
	elem.style.left = rect.left + 'px';
	console.log(elem.style.top);
}

window.onload = function () {
	if (String(window.location.href) !== link) {
		stateSet();
		highlight("LSHIFT");
		refreshText();
	}
}

function stateSet () {
    if (String(window.location.href) === link + rus)
        state = rus;
	else
		if (String(window.location.href) === link + eng)
			state = eng;
}

function init () {
	let cursor = document.getElementById("typing");
	tryToHighlight(cursor);
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
function clearKey(id) {
	let key = document.getElementById(id);
	let i = key.className.indexOf("pressed_");
	if (i !== -1)
		key.className = key.className.slice(8);
}
function clear() {
	let key = document.getElementsByClassName("pressed_key");
	if (key[0] != null) {
		for (let i = 0; i < key.length; i++)
			key[i].className = "key";
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
function rusToUpper () {

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
	if (keys != null) {
		keys.innerHTML = ",";
		keys.id = keys.innerHTML;
	}

	keys = document.getElementsByClassName("flex_key");
	keys[2].innerHTML = "/";
	keys[2].id = keys.innerHTML;

	highlight("LSHIFT");
}
function rusToLower () {

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
	if (keys != null) {
		keys.innerHTML = ".";
		keys.id = keys.innerHTML;
	}

	keys = document.getElementsByClassName("flex_key");
	keys[2].innerHTML = "\\";
	keys[2].id = keys.innerHTML;
	clearKey("LSHIFT");
}
function engToUpper () {

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

	highlight("LSHIFT");
}
function engToLower () {

	let keys = document.getElementsByClassName("key");
	for (let i = 0; i < keys.length; i++) {
		keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
		keys[i].id = keys[i].innerHTML;
	}
	let string = "`1234567890-=";
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
	clearKey("LSHIFT");
}
function changeRegistry () {
    if (registryState === upper) {
        registryState = lower;
        if (state === rus)
            rusToLower();
        else if (state === eng)
            engToLower();
    }
    else if (registryState === lower) {
        registryState = upper;
        if (state === rus)
            rusToUpper();
        else if (state === eng)
            engToUpper()
    }
}
function moveCursor (e) {
	let cursor = document.getElementById("typing");
	if (cursor === null)
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
		}
		else {
			tryToHighlight(cursor);
            
			/*if (cursor.innerHTML === cursor.innerHTML.toUpperCase() && cursor.innerHTML !== " ")
                changeRegistry();
                    
		    highlight(cursor.innerHTML);*/
        }
	} else {
		errors++;
		cursor.id = "typing_wrong";
	}
}
function tryToHighlight (cursor) {
	let found = false;
            let keys = document.getElementsByClassName("key");

            if (cursor.innerHTML === " ") {
                highlightSpecial("space_key", "SPACE");
                found = true;
            }
            if (found === false) {
                for (let i = 0; i < keys.length; i++)
                    if (cursor.innerHTML === keys[i].innerHTML) {
                        highlight(cursor.innerHTML);
                        found = true;
                        break;
                    }

                if (found === false)
                changeRegistry();

                keys = document.getElementsByClassName("key");
                for (let i = 0; i < keys.length; i++)
                    if (cursor.innerHTML === keys[i].innerHTML) {
                        highlight(cursor.innerHTML);
                        found = true;
                        break;
                    }
            }
}
function highlightSpecial (className, id) {
	let key = document.getElementById(id);
	key.className = "pressed_" + className;
}
function highlight (id) {
	let key = document.getElementById(id);
	if (key !== null)
		key.className = "pressed_" + key.className;
	
	switchHand(id);
}
function refreshText () {
	let cursor = document.getElementById("typing");
	let typed = document.getElementById("typed");
	let text = document.getElementById("text");
	let str = "";

	str = readRandomText();

	cursor.innerHTML = str.substring(0, 1);
	text.innerHTML = str.slice(1);
	typed.innerHTML = "";

    init();
}
function readRandomText () {
    let str = "";
	let data;
	if (state === rus)
		data = dataRus;
	else
		data = dataEng;

    let mydata = JSON.parse(JSON.stringify(data));
	let i = getRandomInt(mydata.length - 1);
	str = String(mydata[i].text);

    return (str);
}
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

let typedSymbols = 0;	
let errors = 0;

export default document.onkeydown = function (e) {
	if (String(window.location.href) !== link) {
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
}