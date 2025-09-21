document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    
    let formData = {
        firstName: "",
        lastName: ""
    };
    
    // Handle input changes for firstName
    firstNameInput.addEventListener('input', function(e) {
        formData.firstName = e.target.value;
    });
    
    // Handle input changes for lastName
    lastNameInput.addEventListener('input', function(e) {
        formData.lastName = e.target.value;
    });
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check if form is valid
        if (!form.checkValidity()) {
            // If not valid, show validation messages
            form.reportValidity();
            return;
        }
        
        console.log("Submitted:", formData);
        alert(`Welcome ${formData.firstName} ${formData.lastName}! Ready to play?`);
        
        // You can add further logic here, like redirecting to the game page
        // window.location.href = "game.html";
    });
});