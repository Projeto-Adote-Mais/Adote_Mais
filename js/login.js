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

// Direciona para a próxima página
function redireciona(event) {
    event.preventDefault();
    setTimeout(() => {
        window.location.replace("../index.html"); 
    }, 1000);
}