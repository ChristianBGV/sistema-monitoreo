<script>
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'crear-evento.html'; // Panel de monitoreo
    } else {
      alert('Correo o contraseña incorrectos');
    }
  });
</script>
