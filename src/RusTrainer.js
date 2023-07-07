import question from './question.jpeg'
import './styles.css'
import React from 'react'
import Controller from './Controller';

export default function RusTrainer() {
	return (
		<div>
			<div class = "text">
				<h1 class = "main_text"><span id = "typed"></span><span id = "typing"></span><span id = "text"></span></h1>
			</div>
			<script src = {Controller}></script>
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