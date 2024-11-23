document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    document.getElementById('error-message').textContent = 'Mật khẩu không khớp!';
    return;
  }

  localStorage.setItem(username, password);
  alert('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
  window.location.href = 'login.html';
});
