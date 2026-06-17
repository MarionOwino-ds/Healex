// Check that JavaScript is connected

console.log("Healex website loaded");

// Welcome message

window.addEventListener("load", function () {
    console.log("Welcome to Healex");
});

// Buttons

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Button clicked");

    });

});

// Contact Form

const forms = document.querySelectorAll("form");

forms.forEach(function(form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your form has been submitted.");

        form.reset();

    });

});