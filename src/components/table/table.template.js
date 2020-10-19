const CODES = {
	A: 65,
	Z: 90
}

function toCell(_, index) {
	return `
		<div class="table__cell" data-type="resizable" data-col="${index}" contenteditable></div>
	`
}

function toColumn(col, index) {
	return `
		<div class="table__column" data-type="resizable" data-col="${index}">
			${col}
			<div class="table__column--resize" data-resize="col"></div>
		</div>
	`
}

function createRow(index, content) {
	const resize = index ? `<div class="table__row--resize" data-resize="row"></div>` : ''
	return `
		<div class="table__row" data-type="resizable">

			<div class="table__row-info">
				${index ? index : ''}
				${resize}
			</div>

			<div class="table__data">${content}</div>

		</div>
	`
}

function toChar(_, index) {
	return String.fromCharCode( CODES.A + index)
}




export function createTable(rowsCount = 15) {
	const colsCount = CODES.Z - CODES.A + 1
	const rows = []

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(toColumn)
		.join('')

	rows.push(createRow('', cols))
	
	for (let i = 0; i < rowsCount; i++) {
		const cells = new Array(colsCount)
			.fill('')
			.map(toCell)
			.join('')

		rows.push(createRow(i+1, cells))
	}

	return rows.join('')
}