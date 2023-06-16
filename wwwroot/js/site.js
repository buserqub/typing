// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

startdate = new Date();
	clockStart = startdate.getTime();
function refreshStopwatch() {
	startdate = new Date();
	clockStart = startdate.getTime();
}
function initStopwatch() { 
	var thisTime = new Date();
	console.log((thisTime.getTime() - clockStart)/1000);
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
		let elem = document.createElement('div');
		elem.className = "key";
		elem.id = key[0].id;
		elem.innerHTML = key[0].innerHTML.toUpperCase();

		key[0].replaceWith(elem);
	}
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

		if (cursor.innerHTML == "")
			refreshText();
	} else {
		errors++;
		cursor.id = "typing_wrong";
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
	console.log(e.key);
	moveCursor(e);
	if (typedSymbols != 1)
		document.getElementById("speed").innerHTML = String(Math.round(typedSymbols / initStopwatch() * 60));
	document.getElementById("accuracy").innerHTML = String(Math.round((typedSymbols - errors) / typedSymbols * 100));
	console.log(typedSymbols, errors);
	clear();
	let elem = document.createElement('div');
	elem.className = "pressed_key";
	elem.id = String(e.key.toUpperCase());
	elem.innerHTML = e.key.toUpperCase();
	let key = document.getElementById(String(e.key.toUpperCase()));
	key.replaceWith(elem);
};