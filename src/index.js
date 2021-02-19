const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span.error");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");

const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector(
  "#confirm-password + span.error"
);

/* form.addEventListener("blur", (e) => {
  console.log(e.target);
  if (e.target.validity.valid) {
    document.querySelector(`#${e.target.id} + span.error`).textContent = "";
    document.querySelector(`#${e.target.id} + span.error`).className = "error";
    console.log("no error");
  } else {
    showError();
    console.log("error");
  }
}); */

form.addEventListener("submit", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  }
  if (country.validity.valid) {
    countryError.textContent = "";
  }
  if (zip.validity.valid) {
    zipError.textContent = "";
  }
  if (password.validity.valid) {
    passwordError.textContent = "";
  }
  if (confirmPassword.validity.valid) {
    confirmPasswordError.textContent = "";
  }

  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zip.validity.valid ||
    !password.validity.valid ||
    !confirmPasswordError.validity.valid ||
    password.value !== confirmPassword.value
  ) {
    showError();
    e.preventDefault();
  }
});

const showError = function () {
  if (email.validity.valueMissing) {
    emailError.textContent = "* Please enter an email address";
  }
  if (email.validity.typeMismatch) {
    emailError.textContent = "* Please enter a valid email";
  }

  if (country.validity.valueMissing) {
    countryError.textContent = "* Please enter a country";
  }

  if (zip.validity.valueMissing) {
    zipError.textContent = "* Please enter a ZIP code";
  }

  if (password.validity.valueMissing) {
    passwordError.textContent = "* Please enter a password";
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "* Password does not match";
  }
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "* Please confirm password";
  }
};
