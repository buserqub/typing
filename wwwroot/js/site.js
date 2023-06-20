// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function init () {
	let cursor = document.getElementById("typing");
	if (cursor.innerHTML == cursor.innerHTML.toUpperCase() && cursor.innerHTML != " ")
		toUpper();
	else
		toLower();
	highlight(cursor.innerHTML);
}
document.addEventListener("load", init());

startdate = new Date();
	clockStart = startdate.getTime();
function refreshStopwatch() {
	startdate = new Date();
	clockStart = startdate.getTime();
}
function initStopwatch() { 
	var thisTime = new Date();
	return (thisTime.getTime() - clockStart)/1000;
}
function getSecs() { 
	var tSecs = (initStopwatch()); 
	var iSecs = tSecs % 60;
	var iMins = ((tSecs-30)/60); 
	var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
	var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
	document.getElementById("timer-counter").innerHTML = sMins+":"+sSecs;
	setTimeout('getSecs()', 1000); 
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

	if (e.key == cursor.innerHTML) {
		typedSymbols++;
		let typed = document.getElementById("typed");
		let text = document.getElementById("text");

		typed.innerHTML += cursor.innerHTML;
		cursor.innerHTML = text.innerHTML.substring(0, 1);
		text.innerHTML = text.innerHTML.slice(1);
		cursor.id = "typing";
		clear();
		if (cursor.innerHTML == "") {
			refreshText();
			init();
		}
		else
			if (cursor.innerHTML == cursor.innerHTML.toUpperCase() && cursor.innerHTML != " ")
				toUpper();
			else
				toLower();

		highlight(cursor.innerHTML);
	} else {
		errors++;
		cursor.id = "typing_wrong";
	}
	console.log("-highlight");
}
function highlightSpecial (name, className, id) {
	let key = document.getElementById(id);
	key.className = "pressed_" + className;
	key.innerHTML = name;
}
function highlight (symbol) {
	if (symbol == " ") {
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
typedSymbols = 0;
errors = 0;
document.onkeypress = function (e) {
	let typed = document.getElementById("typed");
	if (typed.innerHTML == "") {
		refreshStopwatch();
		typedSymbols = 0;
		errors = 0;
	}
	moveCursor(e);
	if (typedSymbols != 1)
		document.getElementById("speed").innerHTML = String(Math.round(typedSymbols / initStopwatch() * 60));
	document.getElementById("accuracy").innerHTML = String(Math.round((typedSymbols - errors) / typedSymbols * 100));
}