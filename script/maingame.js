// ==============================
// QUIZ ANSWER CHECKING LOGIC
// ==============================
const correctAnswer = "c"; // set correct answer key

const answers = document.querySelectorAll(".answer-button");
answers.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.dataset.answer === correctAnswer) {
			// ✅ Correct answer
			button.style.backgroundColor = "#FF05B0";
			button.querySelector("h1").style.color = "#FFFFFF"; // set text white
		} else {
			// ❌ Wrong answer
			button.style.backgroundColor = "rgba(255, 5, 176, 0.50)";
			button.querySelector("h1").style.color = "#FFFFFF"; // set text white
		}

		// Disable all answers after one selection
		answers.forEach((b) => (b.disabled = true));
	});
});
