// ==============================
// QUIZ ANSWER CHECKING LOGIC
// ==============================
const correctAnswer = "c"; // set correct answer key

const answers = document.querySelectorAll(".answer-button");
answers.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault(); // prevent form submission

		const h1 = button.querySelector("h1"); // select the h1 inside the button

		if (button.dataset.answer === correctAnswer) {
			// ✅ Correct answer
			button.style.backgroundColor = "#FF05B0";
			h1.style.color = "#FFFFFF"; // make h1 white
		} else {
			// ❌ Wrong answer
			button.style.backgroundColor = "rgba(255, 5, 176, 0.50)";
			h1.style.color = "#FFFFFF"; // make h1 white

			// Show the correct answer
			const correctBtn = Array.from(answers).find(
				(b) => b.dataset.answer === correctAnswer
			);
			if (correctBtn) {
				correctBtn.style.backgroundColor = "#FF05B0";
				correctBtn.querySelector("h1").style.color = "#FFFFFF"; // make h1 white
			}
		}

		// Disable all answers after one selection
		answers.forEach((b) => (b.disabled = true));
	});
});
