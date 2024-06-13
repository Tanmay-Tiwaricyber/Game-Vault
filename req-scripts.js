// scripts.js

document.getElementById('game-request-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const game = document.getElementById('game').value;
    const details = document.getElementById('details').value;

    // Display an alert with the captured data (For demonstration purposes)
    alert(`Name: ${name}\nEmail: ${email}\nGame: ${game}\nDetails: ${details}`);

    // Reset form fields
    document.getElementById('game-request-form').reset();
});
