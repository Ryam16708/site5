const Principal = document.getElementById('Principal');
const registerBtn = document.getElementById('registrar');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    Principal.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    Principal.classList.remove("active");
});

//Esse código é responsavel pelas interações na tela de login, onde eles conseguem integir entre si