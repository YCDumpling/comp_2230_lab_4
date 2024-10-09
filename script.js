function validateForm() {

    // clear error msgs

    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.remove();
    });


    // check for valid ticket amount
    let ticketAmount = document.getElementById("ticketAmount");
    if (ticketAmount.value <= 0 || ticketAmount.value != parseInt(ticketAmount.value)) {
        // display the debuged error msg
        console.error("Error entering ticket amount.");
        showInputError(ticketAmount,"Please enter a valid ticket amount. This value must be a positive value.");
        return false;
    }


    // check for valid ticket amount
    let fullname = document.getElementById("fullName");
    if (fullname.value.trim() === "") {
        // display the debuged error msg
        console.error("Error entering full name.");
        showInputError(fullname,"Full name is required.");
        return false;
    }

        // Check for valid email
        let email = document.getElementById("email");
        if (email.value.trim() === "") {
            // display the debuged error msg
            console.error("Error entering email.");
            showInputError(email,"Email is required.");
          return false;
        }  


    // don't need to check for the drop down as it's always selected by default

    return true;
}

// copied off from the lab 4 demo
function showInputError(inputElement, message) {
    // I;ve added a container to include the error message inside of
    const container = inputElement.closest(".input-container");
    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.setAttribute("role", "alert");

    // appending the error message to thge parent input element
    container.appendChild(errorDisplay);
}



window.onload = function() {
    let form = document.getElementById("eventRegistrationForm"); 
    form.addEventListener("submit", function(event) {
        // prevent the page from loading until the validation is complete
        event.preventDefault();
        if (validateForm()) {
            form.submit();
        }
    });
}