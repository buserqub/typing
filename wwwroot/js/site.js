// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function buildRusKeyboard () {
	let keyBoard = document.createElement('div');
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
		let typed = document.getElementById("typed");
		let text = document.getElementById("text");

		typed.innerHTML += cursor.innerHTML;
		cursor.innerHTML = text.innerHTML.substring(0, 1);
		text.innerHTML = text.innerHTML.slice(1);
		cursor.id = "typing";

		if (cursor.innerHTML == "")
			refreshText();
	} else {
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

document.onkeypress = function (e) {
	console.log(e.key);
	moveCursor(e);
	clear();
	let elem = document.createElement('div');
	elem.className = "pressed_key";
	elem.id = String(e.key.toUpperCase());
	elem.innerHTML = e.key.toUpperCase();
	let key = document.getElementById(String(e.key.toUpperCase()));
	key.replaceWith(elem);
};