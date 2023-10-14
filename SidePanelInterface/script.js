document.getElementById('inputMessage').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {  // 13 is the keyCode for the Enter key
        e.preventDefault();  // Prevent newline being added in input field
        sendMessage();
    }
});

document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const inputElement = document.getElementById('inputMessage');
    const message = inputElement.value;
    
    if(message.trim() === '') return;  // Ignore empty messages
    
    displayMessage('User', message);
    inputElement.value = '';  // Clear the input field
    
    // Simple response logic
    let botMessage = "Sorry, I didn't understand that.";
    if (message.toLowerCase().includes('hello')) {
        botMessage = 'Hi there!';
    } else if (message.toLowerCase().includes('how are you')) {
        botMessage = 'I am a bot, I do not have feelings, but thanks for asking!';
    }
    
    setTimeout(() => {
        displayMessage('Bot', botMessage);
    }, 1000);  // Respond after a 1-second delay
}

function displayMessage(sender, message) {
    const messagesDiv = document.getElementById('messages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender.toLowerCase();
    messageDiv.innerHTML = `<b>${sender}:</b> ${message}`;
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Scroll to the bottom
}
