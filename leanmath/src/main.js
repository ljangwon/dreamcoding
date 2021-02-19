'use strict';

// global customized function
function log(message) {
	console.log(message);
}

// toggleBtn
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
	icons.classList.toggle('active');
});

// Fetch the items from the JSON file
function loadStudents() {
	return fetch('data/data.json')
		.then((response) => response.json())
		.then((json) => json.students);
}

// Update the list with the given items
function displayStudents(students) {
	const container = document.querySelector('.students__list');
	container.innerHTML = students
		.map((student) => createHTMLString(student))
		.join('');
}

// Create HTML list item from the given data item
function createHTMLString(student) {
	return `
  <li class="student">
     <span class="item_description">${student.num}, ${student.grade1}, ${student.grade2}, ${student.name}</span><br>
     <span class="item_description">
     ${student.num}, 
     <form>
     <input type="text" id="grade1" value="${student.grade1}">,
     <input type="text" id="grade2" value="${student.grade2}">,
     <input type="text" id="name" value="${student.name}"></span>
     </form>
  </li>
  `;
}

// ----------------------------------------

function onButtonClick(event, items) {
	const dataset = event.target.dataset;
	const key = dataset.key;
	const value = dataset.value;

	if (key == null || value == null) {
		return;
	}

	if (key == 'grade1' && value == 'A') {
		displayStudents(items);
		return;
	}

	console.log(key);
	console.log(value);

	displayStudents(items.filter((item) => item[key] === value));
}

function setEventListeners(items) {
	const buttons = document.querySelector('.students__option');

	buttons.addEventListener('click', (event) => onButtonClick(event, items));
}

loadStudents()
	.then((students) => {
		displayStudents(students);
		setEventListeners(students);
	})
	.catch(console.log);
