export const list = [
	{
		number: 132313,
		sender: 'Цех 01 / участок Цеха 01',
		recipient: 'Цех 02 / участок Цеха 02',
		date: '15.06.2024'
	},
	{
		number: 7063041,
		sender: 'Цех 01',
		recipient: 'Цех 02',
		date: '15.06.2024'
	},
	{
		number: 7063041,
		sender: 'Цех 01',
		recipient: 'Цех 02',
		date: '15.06.2024'
	},
	{
		number: 7063041,
		sender: 'Цех 01',
		recipient: 'Цех 02',
		date: '15.06.2024'
	},
	{
		number: 7063041,
		sender: 'Цех 01',
		recipient: 'Цех 02',
		date: '15.06.2024'
	},
	{
		number: 7063041,
		sender: 'Цех 01',
		recipient: 'Цех 02',
		date: '15.06.2024'
	},
	{
		number: 7063041,
		sender: 'Цех 01',
		recipient: 'Цех 02',
		date: '15.06.2024'
	},

]


document.addEventListener('DOMContentLoaded', () => {
	const listOfData = document.createElement('div')
	listOfData.classList.add('main_listOfData')
	listOfData.setAttribute('id', 'listOfData')
	document.getElementById('main').append(listOfData)
	drawListInElem(document.getElementById('listOfData'), list)
})


function drawListInElem(listOfData, list) {
	list.forEach((elem) => {
		const dataItem = document.createElement('div')
		const title = document.createElement('h4')
		const span1 = document.createElement('span')
		const span2 = document.createElement('span')
		const span3 = document.createElement('span')
		const p1 = document.createElement('p')
		const p2 = document.createElement('p')
		const p3 = document.createElement('p')

		title.textContent = `ВЗН №${elem.number}`
		dataItem.classList.add('listOfData_item')

		span1.textContent = `Отправитель: `
		p1.append(span1)
		p1.append(`${elem.sender}`)
		span2.textContent = `Получатель: ` 
		p2.append(span2)
		p2.append(`${elem.recipient}`)
		span3.textContent = `Дата выдачи: ` 
		p3.append(span3)
		p3.append(`${elem.date}`)

		dataItem.append(title)
		dataItem.append(p1)
		dataItem.append(p2)
		dataItem.append(p3)
		listOfData.append(dataItem)
	})
}