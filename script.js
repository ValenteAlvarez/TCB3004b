const user = document.querySelector('#username');
const password = document.querySelector('#password');
const loginButton = document.querySelector('button');

function logIn(event) {
	event.preventDefault();
	if (user.value === 'admin' && password.value === 'admin') {
		window.location.href = '../redirect.html'
	}
	else {
		user.value = '';
		password.value = '';
		alert('Error en el usuario/contraseña (intenta admin/admin)')
	}
}

loginButton.addEventListener('click', (e) => {
	logIn(event)
})