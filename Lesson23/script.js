const regexPatterns = {
  namePattern: /^[A-Za-z]{2,}$/,
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phonePattern: /^\+?[1-9]\d{1,14}$/,
};

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  console.log("Form submitted, validating...");
  const errorMessages = document.querySelectorAll(".error");

  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].textContent = "";
  }

  let isFormValid = true;

  const nameInputValue = document.getElementById("name").value;
  if (!regexPatterns.namePattern.test(nameInputValue)) {
    isFormValid = false;
    document.getElementById("nameError").textContent =
      "Name input should iclude letters and at least 2 chracters";
  }

  // TODO: add surname field validation

  const emailInputValue = document.getElementById("email").value;

  if (!regexPatterns.emailPattern.test(emailInputValue)) {
    isFormValid = false;
    document.getElementById("emailError").textContent =
      "Email is required and should follow email pattern: name@domain.com";
  }

  const ageInputValue = parseInt(document.getElementById("age").value);

  if (0 > ageInputValue || ageInputValue > 150 || isNaN(ageInputValue)) {
    isFormValid = false;
    document.getElementById("ageError").textContent =
      "Age must be between 0 and 150.";
  }

  const phoneInputValue = document.getElementById("phone").value;

  if (!regexPatterns.phonePattern.test(phoneInputValue)) {
    isFormValid = false;
    document.getElementById("phoneError").textContent =
      "Phone number is required and should be in international format, e.g. +37061234567";
  }

  if (isFormValid) {
    // TODO: send form data to server
    document.getElementById("formSubmitSuccess").textContent =
      "Form submitted successfully!";
  }
}

// For text input field, change event is triggered when the value of the input field is changed AND user leaves the field (focus is lost) that's why we did not see the change event when typing in the input field.
document.getElementById("name").addEventListener("change", function () {
  const nameInputValue = document.getElementById("name").value;
  if (!regexPatterns.namePattern.test(nameInputValue)) {
    document.getElementById("nameError").textContent =
      "Name input should iclude letters and at least 2 chracters";
  }
});
