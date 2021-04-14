let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow'),
	btnContainer = document.querySelector('.col'),
	total = document.querySelector('#total'),
	sqrtBtn = document.querySelector('#sqrt'),
	btns = document.querySelectorAll('.btn:not(#total, #btn_clr, #sqrt)');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

btnContainer.addEventListener('click', (e) => {
	btns.forEach(item => {
		if (e.target == item) {
			inputWindow.value += item.textContent;
		}
	});
});

total.addEventListener('click', () => {
	inputWindow.value = eval(inputWindow.value);
});	

sqrtBtn.addEventListener('click', () => {
	inputWindow.value = Math.sqrt(inputWindow.value);
});



