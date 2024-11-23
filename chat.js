function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  if (message !== "") {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageElement);

    // Cuộn xuống để hiển thị tin nhắn mới
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Xóa nội dung input sau khi gửi
    messageInput.value = "";
  }
}
