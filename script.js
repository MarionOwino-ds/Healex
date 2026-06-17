console.log("Healex website loaded");

window.addEventListener("load", function () {
    console.log("Welcome to Healex");
});

// Buttons (logs a click, doesn't break anything if no buttons exist)

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("Button clicked");
    });
});

// Forms (Book Now / Send Message)

const forms = document.querySelectorAll("form");

forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! Your form has been submitted.");
        form.reset();
    });
});