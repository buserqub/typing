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


document.onkeypress = function (e) {
    clear();
    let elem = document.createElement('div');
    elem.className = "pressed_key";
    elem.id = String(e.key.toUpperCase());
    elem.innerHTML = e.key.toUpperCase();
    let key = document.getElementById(String(e.key.toUpperCase()));
    key.replaceWith(elem);
};