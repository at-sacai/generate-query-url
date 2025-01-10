const clearUrlInputButton = document.querySelector('.clear_url_input_button');
// const splitUrlButton = document.querySelector('.split_url_section button');
const clearPramsInputsButton = document.querySelector('.clear_params_inputs_button');
const addFormButton = document.querySelector('.add_form_button');
const createURLButton = document.querySelector('.create_url_section button');

clearUrlInputButton.addEventListener('click', () => {
	const inputUrl = document.querySelector('.input_url_section input');
	inputUrl.value = '';
});

// splitUrlButton.addEventListener('click', () => {
// 	const inputUrl = document.querySelector('.input_url_section input');
// 	const urlValue = inputUrl.value;
// 	const urlParams = new URLSearchParams(urlValue.substr(urlValue.indexOf('?') + 1));

// 	urlParams.forEach((value, key) => {
// 		const rows = document.querySelectorAll('.input_params_section table tr');
// 		for (let i = 1; i < rows.length; i++) {
// 			const keyInput = rows[i].querySelector('td:nth-child(2) input');
// 			const valueInput = rows[i].querySelector('td:nth-child(3) input');
// 			if (!keyInput.value && !valueInput.value) {
// 				keyInput.value = key;
// 				valueInput.value = value;
// 				break;
// 			}
// 		}
// 	});
// });

createURLButton.addEventListener('click', () => {
	const inputUrl = document.querySelector('.input_url_section input');
	let urlValue = inputUrl.value;

	if (!urlValue.startsWith('http://') && !urlValue.startsWith('https://')) {
		urlValue = 'https://' + urlValue;
	}

	const baseUrl = urlValue.split('?')[0];

	const urlParams = new URLSearchParams();
	const rows = document.querySelectorAll('.input_params_section table tr');
	for (let i = 1; i < rows.length; i++) {
		const keyInput = rows[i].querySelector('td:nth-child(2) input');
		const valueInput = rows[i].querySelector('td:nth-child(3) input');
		if (keyInput.value && valueInput.value) {
			urlParams.append(keyInput.value, valueInput.value);
		}
	}

	const newUrl = baseUrl + '?' + urlParams.toString();

	const outputSpan = document.querySelector('.generate_url_section .wrap_p span');
	outputSpan.textContent = newUrl;
});

clearPramsInputsButton.addEventListener('click', () => {
	const rows = document.querySelectorAll('.input_params_section table tr');
	for (let i = 1; i < rows.length; i++) {
		const keyInput = rows[i].querySelector('td:nth-child(2) input');
		const valueInput = rows[i].querySelector('td:nth-child(3) input');
		keyInput.value = '';
		valueInput.value = '';
	}
});

addFormButton.addEventListener('click', () => {
	const table = document.querySelector('.input_params_section table');
	const rowCount = table.rows.length;
	const newRow = table.insertRow(rowCount);

	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	const cell3 = newRow.insertCell(2);

	cell1.textContent = rowCount;
	cell2.innerHTML = '<input type="text" placeholder="Enter key" />';
	cell3.innerHTML = '<input type="text" placeholder="Enter value" />';
});
