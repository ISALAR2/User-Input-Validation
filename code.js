function validateInputs() {
    const fname = document.getElementById("firstName").value; // Get the first name value
    const lname = document.getElementById("lastName").value; // Get the last name value
    const fullName = fname + " " + lname; // Combine first and last name
    const zip = document.getElementById("zip").value; // Get the zip code value
    const fnameWarn = document.getElementById("fnameWarn"); // Get the first name warning element
    const lnameWarn = document.getElementById("lnameWarn"); // Get the last name warning element
    const zipWarn = document.getElementById("zipWarn"); // Get the zip code warning element
    const messageDiv = document.getElementById("message"); // Get the message div element
    const secretSpan = document.getElementById("secret"); // Get the secret span element
    let isValid = true; // Initialize isValid to true

    fnameWarn.textContent = ""; // Clear the first name warning message
    lnameWarn.textContent = ""; // Clear the last name warning message
    zipWarn.textContent = ""; // Clear the zip code warning message
    messageDiv.style.display = "none"; // Hide the message div

    if (fullName.length > 20) { // Check if the full name is too long
        fnameWarn.textContent = "Name too long!"; // Set the first name warning message
        isValid = false;  // Set isValid to false
    }

    if (!/^\d{5}$/.test(zip)) { // Check if the zip code is valid (5 digits)
        zipWarn.textContent = "Invalid zip!"; // Set the zip code warning message
        isValid = false; // Set isValid to false
    }

    if (isValid) {
        secretSpan.textContent = "Data validated successfully!"; // Set the secret span message
        messageDiv.style.display = "block"; // Show the message div
    }
}