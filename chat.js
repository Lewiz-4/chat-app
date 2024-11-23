function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  if (message !== "") {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageElement);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    messageInput.value = "";
  }
}
