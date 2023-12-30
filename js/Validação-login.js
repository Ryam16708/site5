const form1 = document.getElementById('form1')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha  = document.getElementById('senha')


form1.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()

    if(nomeValue === "") {  
    error (nome)
    alert('Preencha esse campo')
    } else {
    sucesso(nome)
    }

    if(emailValue === "") {  
    error (email)
    alert('Preencha esse campo')
    } else {
    sucesso(email)
    
    }
    if(senhaValue === "") {  
    error (senha)
    alert('Preencha esse campo')
    } else{
        sucesso(senha)
    }

    if (senhaValue.length < 6) {
    error (senha) 
    alert('A senha deve ter no mmínimo 6 caracteres')   
    } else {
        sucesso
    }
    
    var nome2 = document.getElementById('nome').value.trim()
    var email2 = document.getElementById('email').value.trim()
    var senha2  = document.getElementById('senha').value.trim()

    if(nome2 != "" && email2 != "" && senha2 != "" && senha2.length >= 6) {

        location.href = "../HTML/Login.html"
    }
}
function logar() {

    var loginValue = document.getElementById('email267').value.trim()
    var senhaValue = document.getElementById('senha267').value.trim()

    if(loginValue === "teste@gmail.com" && senhaValue === "admin2") {
        location.href = "../index.html"
    } else {
        error(login)
        alert('Email ou senha incorreta')
    }
    if (senhaValue.length < 6) {    
        error(senha)
        alert('Email ou senha incorreta')  
        if(loginValue === "teste@gmail.com" && senhaValue === "admin2") {
            location.href = "../index.html"
        }
    } 
}

function error(input, msg) {
    const form1Control = input.parentElement;
    
    form1Control.className = 'form-control error'
}
function sucesso(input) {
    const form1Control = input.parentElement;

    form1Control.className = 'form-control sucesso'
}
//Esse ódigo foi criado para validar os dados na hora de entra ou de cadastrar os úsuario.
//Foi chamado o id dos inputs como o nome, email e senha, depois foi criado uma função para checar os inputs, chamamos os input dentro da função, e criamos alguns if para lidar com algumas exeções e deixando claro se aquele campo estava preenxido corretamente.