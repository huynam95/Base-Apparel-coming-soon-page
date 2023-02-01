"use strict";

const formEl = document.querySelector(".form");
const inputValid = document.querySelector(".email-input");
const buttonEl = document.querySelector(".button");

const errorIconEl = document.querySelector(".error-icon");
const errorTextEl = document.querySelector(".error-text");

const okIconEl = document.querySelector(".ok-icon");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(inputValid.validity);

  //EMPTY FIELD
  if (inputValid.validity.valueMissing) {
    okIconEl.classList.add("hidden");
    errorIconEl.classList.remove("hidden");

    errorTextEl.textContent = "The input field is empty !";
    errorTextEl.classList.remove("hidden");

    errorTextEl.style.color = "hsla(0, 93%, 68%, 0.799)";
  }

  //WRONG FORMAT
  if (inputValid.validity.typeMismatch) {
    okIconEl.classList.add("hidden");
    errorIconEl.classList.remove("hidden");

    errorTextEl.textContent = "The email address is not formatted correctly !";
    errorTextEl.classList.remove("hidden");

    errorTextEl.style.color = "hsla(0, 93%, 68%, 0.799)";
  }

  //VALID
  if (inputValid.validity.valid) {
    errorIconEl.classList.add("hidden");
    errorTextEl.classList.add("hidden");

    errorTextEl.textContent = "The email is submitted successfully !";
    errorTextEl.style.color = "#69db7c";
    errorTextEl.classList.remove("hidden");

    okIconEl.classList.remove("hidden");
  }
});
