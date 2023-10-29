function sendMessage() {
    const chatArea = document.getElementById('chat-area');
    const userComment = document.getElementById('user-comment');
    
    if(userComment.value.trim() !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = userComment.value;
        chatArea.appendChild(messageDiv);

        // Reset the textarea and scroll chat to the newest message
        userComment.value = '';
        chatArea.scrollTop = chatArea.scrollHeight;
    }
}
