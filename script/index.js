document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("userForm");
	const firstNameInput = document.getElementById("firstName");
	const lastNameInput = document.getElementById("lastName");

	// Function to clear the input form
	function clearForm() {
		firstNameInput.value = "";
		lastNameInput.value = "";

		// Optional: Remove validation states if they exist
		firstNameInput.classList.remove("is-valid", "is-invalid");
		lastNameInput.classList.remove("is-valid", "is-invalid");

		// Optional: Reset the form's validation state
		form.classList.remove("was-validated");
	}

	// Handle form submission
	form.addEventListener("submit", function (e) {
		e.preventDefault();

		// Check if form is valid
		if (!form.checkValidity()) {
			// If not valid, show validation messages
			form.reportValidity();
			return;
		}

		// Get the current values directly from the input fields
		const formData = {
			firstName: firstNameInput.value,
			lastName: lastNameInput.value,
		};

		console.log("Submitted:", formData);
    clearForm();
	});
});
