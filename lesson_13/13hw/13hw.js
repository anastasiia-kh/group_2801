const inputName = document.querySelector('.inputName_form');
const inputText = document.querySelector('.inputText_form');

const btn = document.querySelector('.btn');

function formCreation() {
	for (var i = 0; i < 1; i++) {
		var form = document.createElement('div');
		form.classList.add('form');
		document.body.append(form);

		var name = document.createElement('p');
		name.classList.add('form-new_name');
		form.appendChild(name);
		name.innerHTML = inputName.value;

		var text = document.createElement('p');
		text.classList.add('form-new_text');
		form.appendChild(text);
		text.innerHTML = inputText.value;
		inputName.value = '';
		inputText.value = '';
	}
}

function add() {
	if (!inputName.value) {
		alert('Please, enter your name');
	} else if (!inputText.value) {
		alert('Please, enter your comment');
	} else {
		formCreation();
	}
}

function newForm() {
	add();
}

btn.addEventListener('click', newForm);
