const randomNumberBtn = document.querySelector('.container-button');

randomNumberBtn.addEventListener('click', () => {
	// Create random number
	const randomNumberEl = document.getElementById("random-number")
	const min = 0
	const max = 101
	const randomNumber = Math.floor(Math.random() * (max - min)) + min
	randomNumberEl.innerHTML = `${randomNumber}`

	// Copy to clipboard
	const randomNumberText = randomNumberEl.textContent;
  	copyToClipboard(randomNumberText)
})

function copyToClipboard(text) {
  	navigator.clipboard.writeText(text)
}
