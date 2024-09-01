// document.getElementById('btn-search').addEventListener('click', function (event) {
// 	event.preventDefault()
// 	console.log('click')
// })

// сделать чтобы при клике он переходил на другую страницу через определенное время, если все поля верны

document.getElementById('btn-search').addEventListener('touchstart', function (event) {
	event.preventDefault()
	validate(document.getElementById('main_form'))
})

document.getElementById('btn-cancel').addEventListener('touchstart', function (event) {
	event.preventDefault()
	clearForm(document.getElementById('main_form'))
})

function clearForm(form) {
	const FORM_INPUTS = Array.from(form.querySelectorAll('input'))
	FORM_INPUTS.forEach((elem) => {
		elem.value = ''
		clearStyles(elem, elem.parentNode.classList[1])
	})
}

function clearError(elem, hasError) {
	const parentNode = elem.parentNode
	if (parentNode.classList.contains('border_color-error')) {
		if(hasError.isError) hasError.countError -= 1
		clearStyles(elem, 'border_color-error')
	}
}

function clearStyles(elem, style) {
	const parentNode = elem.parentNode

	if ((style === 'border_color-error' || style === 'border_color-success')
		&& parentNode.classList.contains(style)) {
		parentNode.classList.remove(style)
		parentNode.nextElementSibling.tagName === 'SPAN' && parentNode.nextElementSibling.remove()
	}
}

function successInputValue(elem, hasError) {
	const parentNode = elem.parentNode
	clearError(elem, hasError)
	parentNode.classList.add('border_color-success')
}

function createError(elem, error, hasError) {
	const parentNode = elem.parentNode
	hasError.countError += 1
	if (parentNode.nextElementSibling.textContent === error) {
		return
	}
	if (parentNode.nextElementSibling && parentNode.nextElementSibling.tagName === 'SPAN') {
		parentNode.nextElementSibling.remove()
	}
	const errorText = document.createElement('span')
	if (parentNode.classList.contains('border_color-success')) {
		clearStyles(elem, 'border_color-success')
		parentNode.classList.add('border_color-error')
	} else 
		parentNode.classList.add('border_color-error')
	errorText.classList.add('form_error-text')
	errorText.textContent = error
	parentNode.after(errorText)
}

function validatePositiveNumber(value) {
	const regex = /^[1-9]\d{1,20}$/;
	return regex.test(value);
}

function validateString(value) {
	const regex = /^.{1,50}$/;
	return regex.test(value);
}

function validateDate(value) {
	const regex = /^(0[1-9]|[12][0-9]|[0-9][0-9])\.(0[1-9]|1[012])\.([12]\d{3})\s-\s(0[1-9]|[12][0-9]|[0-9][0-9])\.(0[1-9]|1[012])\.([12]\d{3})$/;
	return regex.test(value);
}

function getDay(months, findingMonth) {
	for (const [month, days] of Object.entries(months)) {
		if (month.includes(findingMonth)) {
				return days;
		}
	}
}


function correctDate(elem, value) {
	const countDaysInMonth = {
		'02': 28,
		'01,03,05,07,08,10,12': 31,
		'04,06,09,11': 30
	}
	const arrDates = value.replace(/\s+/g, '').split('-')
	const [FIRST_DATE, SECOND_DATE]  = arrDates
	let flag = true

	if (+FIRST_DATE.slice(6) > +SECOND_DATE.slice(6)) {
		return false
	}
	if (+FIRST_DATE.slice(3, 5) > +SECOND_DATE.slice(3, 5)) {
		return false
	}
	if (+FIRST_DATE.slice(0, 2) > +SECOND_DATE.slice(0, 2)) {
		return false
	}

	arrDates.forEach((item) => {
		if (+item.slice(0, 2) > getDay(countDaysInMonth, item.slice(3, 5))) {
			flag = false
			return 
		}
	})
	if (!flag)
		return flag
	else 
		return flag
}

function validate(form) {
	const FORM_INPUTS = Array.from(form.querySelectorAll('input'))
	const error = {
		countError: 0
	} 

	FORM_INPUTS.forEach(element => {
		if (element.value == '') {
			createError(element, 'поле не заполнено', error)
		} else if (element.getAttribute('type') === 'number') {
			!validatePositiveNumber(element.value) ? createError(element, 'номер должен быть целым, положительным, не больше 20 символов ', error) : successInputValue(element, error)
		} else if (element.getAttribute('data-type') === 'text') {
			!validateString(element.value) ? createError(element, 'превышена длина значения (1 - 50)', error) : successInputValue(element, error)
		} else if (element.getAttribute('data-type') === 'data') {
				!validateDate(element.value) ?
				createError(element, 'неверный формат даты', error) :
				correctDate(element, element.value) ? 
				successInputValue(element, error) :
				createError(element, 'неверный формат даты', error)		
		}
	});

	if (!error.countError)
		setTimeout(() => window.location.href = 'VZN_RASHOD-page.html', 500)
}