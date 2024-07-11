const messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    // Add more messages as needed
];

// Function to update message
function updateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}

// Event listener for button click
document.getElementById('refreshButton').addEventListener('click', updateMessage);

// Initial page load: Call updateMessage to display initial message
updateMessage();