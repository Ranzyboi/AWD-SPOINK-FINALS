// scripts/index.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const reserveForm = document.querySelector('.reserve-form');

    // Add an event listener for the form submission
    reserveForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the selected seats
        const selectedSeats = document.querySelectorAll('.seatBtn:checked');

        // Get the date and time inputs
        const dateInput = document.getElementById('date');
        const timeInput = document.getElementById('time');

        // Prepare the data to be submitted
        const formData = {
            date: dateInput.value,
            time: timeInput.value,
            seats: Array.from(selectedSeats).map(seat => seat.id)
        };

        // Here, you would typically send the form data to your server using fetch or another method
        // For demonstration purposes, we'll just log the data to the console
        console.log(formData);

        // Optionally, you can reset the form after submission
        reserveForm.reset();
    });

    // Add an event listener for the "Back" button
    const backButton = document.querySelector('.btn-back');
    backButton.addEventListener('click', function() {
        // Redirect or perform any other desired action when the button is clicked
        window.history.back();
    });
});
