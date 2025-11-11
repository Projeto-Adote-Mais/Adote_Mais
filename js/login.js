const inputSenha = document.getElementById("senhaUser");
const botaoOlho = document.getElementById("botaoIconeSenha");
const iconeBotao = document.getElementById("alterarIconeSenha");
const forms = document.querySelector(".forms");


botaoOlho.addEventListener("click", alteraIcone);

// Altera ícone
function alteraIcone() {
    const tipoInput = inputSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    inputSenha.setAttribute('type', tipoInput);

    iconeBotao.classList.toggle('fa-eye');
    iconeBotao.classList.toggle('fa-eye-slash');
}

forms.addEventListener("submit", redireciona);

// Redireciona para outro local
function redireciona(event) {
    event.preventDefault();
    window.location.replace("../index.html"); 
}