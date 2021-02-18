const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + div.error");

const country = document.querySelector("#country");
const countryError = document.querySelector("#country + div.error");

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + div.error");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + div.error");

const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector(
  "#confirm-password + div.error"
);

email.addEventListener("input", (e) => {
  console.log(e.target);
  if (e.target.validity.valid) {
    document.querySelector(`#${e.target.id} + div.error`).textContent = "";
    document.querySelector(`#${e.target.id} + div.error`).className = "error";
  } else {
    showError();
  }
});

const showError = function () {
  if (email.validity.)
};
