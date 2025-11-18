const forms = document.querySelector(".forms");
const feedbacks = document.querySelectorAll(".p-mensagem");
const positivo = document.querySelector(".p-mensagem-positiva");
const campos = document.querySelectorAll("#nome, #endereco, #ponto-referencia");

function verificaCampos(event) {
    event.preventDefault();

    let temErro = false;

    // Limpa mensagens
    feedbacks.forEach(fb => fb.textContent = "");

    // Valida cada campo
    campos.forEach(campo => {
        const valor = campo.value.trim();
        const pMensagem = campo.nextElementSibling;

        if (campo.id === "nome" && valor.length <= 2) {
            pMensagem.textContent = "Deve ter no mínimo 3 caracteres";
            pMensagem.style.display = "block";
            temErro = true;
        }

        if (campo.id === "endereco" && valor.length < 10) {
            pMensagem.textContent = "Deve ter no mínimo 10 caracteres";
            pMensagem.style.display = "block";
            temErro = true;
        }

        if (campo.id === "ponto-referencia" && valor.length < 3) {
            pMensagem.textContent = "Deve ter no mínimo 3 caracteres";
            pMensagem.style.display = "block";
            temErro = true;
        }
    });

    if (!temErro) {
        positivo.textContent = "Enviado com sucesso!";
        positivo.style.display = "block";

        setTimeout(() => {
            window.location.replace("/pages/perfil.html"); 
        }, 2000);
        
    }
}

forms.addEventListener("submit", verificaCampos);
