document.getElementById('btn-search').addEventListener('click', function (event) {
	event.preventDefault()
	console.log('click')
})


document.getElementById('btn-search').addEventListener('touchstart', function (event) {
	event.preventDefault()
	validate(document.getElementById('main_form'))
})

function validate(form) {
	// form.querySelectorAll('input').forEach(element => {
	// 	console.log(element)
	// });
}