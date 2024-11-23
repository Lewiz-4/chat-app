document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;
  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    alert('Đăng nhập thành công!');
    window.location.href = 'chat.html';
  } else {
    document.getElementById('error-message').textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
  }
});
