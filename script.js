const container = document.querySelector(".container");
const resetButton = document.querySelector(".resetButton");
const clearButton = document.querySelector(".clearButton");

function deleteGrid() {
	container.innerHTML = '';
}

function createGrid(gridLength) {
	for (let i = 0; i < gridLength; i++) {
		let row = document.createElement("div");
		row.className = "row";
	
		for (let j = 0; j < gridLength; j++) {
			let square = document.createElement("div");
			square.className = "square";
			square.style.opacity = "0";
			square.addEventListener("mouseover", () => {
				let randomColor = Math.floor(Math.random()*16777215).toString(16);
				square.style.backgroundColor = "#" + randomColor;
				let opacity = parseFloat(square.style.opacity);
				square.style.opacity = opacity + 0.1;
			})
			row.appendChild(square);
		}
		container.appendChild(row);
	}
}

deleteGrid();
createGrid(16);

resetButton.addEventListener("click", () => {
	let gridLength;
	do {
		gridLength = prompt("Please enter the resolution of the new grid (less than 100):")
	} while (gridLength < 1 || gridLength >= 100);
	
	deleteGrid();
	createGrid(gridLength);
})

clearButton.addEventListener("click", () => {
	const gridLength = container.childElementCount;
	deleteGrid();
	createGrid(gridLength);
})
