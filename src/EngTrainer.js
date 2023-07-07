import question from './question.jpeg'
import './styles.css'
import React from 'react'
import Controller from './Controller';

export default function EngTrainer() {
	return(
		<div>
			<div class = "text">
				<h1 class = "main_text"><span id = "typed"></span><span id = "typing"></span><span id = "text"></span></h1>
			</div>			
			<script src = {Controller}></script>
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