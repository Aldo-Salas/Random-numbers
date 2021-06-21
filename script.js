const randomNumberBtn = document.querySelector(".container-button");

randomNumberBtn.addEventListener("click", () => {
  // Create random number
  const randomNumberEl = document.getElementById("random-number");
  const MIN = 0;
  const MAX = 101;
  const randomNumber = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  randomNumberEl.textContent = `${randomNumber}`;

  // Copy to clipboard
  const randomNumberText = randomNumberEl.textContent;
  copyToClipboard(randomNumberText);
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}
