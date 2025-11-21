const perfilVoluntario = document.getElementById("perfilVoluntario");
const radioVoluntario = document.getElementById("voluntario");
const radioTutor = document.getElementById("tutor");

const senhaCadastro = document.getElementById("senhaCadastro");
const btnSenha = document.getElementById("btnIconeSenha");
const iconeSenha = document.getElementById("alterarIconeCadastro");

const senhaConfirmacao = document.getElementById("confirmacaoSenha");
const btnConfirmacao = document.getElementById("btnIconeConfirmacao");
const iconeConfirmacao = document.getElementById("alterarIconeConfirmacao");

const formulario = document.querySelector(".forms-cadastro");
const msg = formulario.querySelector(".mensagem");

// Altera ícone senha
function mudaIconeSenha(){
    const tipo = senhaCadastro.getAttribute('type') === 'password' ? 'text' : 'password';
    senhaCadastro.setAttribute('type', tipo);

    iconeSenha.classList.toggle('fa-eye');
    iconeSenha.classList.toggle('fa-eye-slash');
}
btnSenha.addEventListener("click", mudaIconeSenha);

// Altera ícone confirmacao 
function mudarIconeConfirmacao() {
    const tipo = senhaConfirmacao.getAttribute('type') === 'password' ? 'text' : 'password';
    senhaConfirmacao.setAttribute('type', tipo);

    iconeConfirmacao.classList.toggle('fa-eye');
    iconeConfirmacao.classList.toggle('fa-eye-slash');
}
btnConfirmacao.addEventListener("click", mudarIconeConfirmacao);

// Exibe a pergunta
function mostrarPergunta(){
    if(radioVoluntario.checked) {
        perfilVoluntario.style.display = "block";
    }
}
radioVoluntario.addEventListener("change", mostrarPergunta);

// Oculta a pergunta
function ocultarPergunta() {
    if(radioTutor.checked) {
        perfilVoluntario.style.display = "none";
    }
}
radioTutor.addEventListener("change", ocultarPergunta);

// Exibe mensagem
function exibirMensagem(mensagem) {
  msg.textContent = mensagem;
  msg.style.display = "block";
}

// Limpa mensagem
function limparMensagem() {
  msg.textContent = "";
  msg.style.display = "none";
}

// Direciona para a próxima página
function redireciona(){
    exibirMensagem("Conta criada com sucesso!");
    setTimeout(() => {
        window.location.replace("../pages/login.html");
    }, 2000);
}

// Verifica campos
function verificaForms(event){
    event.preventDefault();
    limparMensagem();

    const idadeInput = formulario.querySelector("#idadeUser").value;

    if(idadeInput < 18){
        exibirMensagem("Para criar a conta é preciso ter 18 anos ou mais.");

        setTimeout(() => {
            window.location.replace("../index.html");
        }, 2000);
        
        return;
    }

    if(senhaCadastro.value.trim() != senhaConfirmacao.value.trim()){
        exibirMensagem("Senhas diferentes. Por favor, informe novamente.");
        senhaCadastro.value = "";
        senhaConfirmacao.value = "";
        return;
    }

    redireciona();
}
formulario.addEventListener("submit", verificaForms);
