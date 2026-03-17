const generatBtn = document.getElementById("generate-btn");
const paletteContainer = document.getElementById(".palette-container");

generatBtn.addEventListener("click", generatPalette);
copybtn.addEventListener("click", function (e) {
	if (e.target.classList.contains("copy-btn")) {
	}
});

function generatPalette() {
	const colors = [];

	for (let i = 0; i < 5; i++) {
		colors.push(generatRandomColor());
	}

	updatePaltteDiplay(colors);
}

function generatRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function updatePaltteDiplay(colors) {
	const colorBoxes = document.querySelectorAll(".color-box");

	colorBoxes.forEach((box, index) => {
		const color = colors[index];
		const colorDiv = box.querySelector(".color");
		const hexValue = box.querySelector(".hex-value");

		colorDiv.style.backgroundColor = color;
		hexValue.textContent = color;
	});
}

generatPalette();
