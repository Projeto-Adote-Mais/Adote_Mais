const form = document.querySelector(".forms");
const campos = document.querySelectorAll(".grupo-campos input");
const mensagens = form.querySelectorAll(".p-mensagem");
const checkboxes = form.querySelectorAll("fieldset input[type='checkbox']");


// Valida info. dos campos
function validaCampos(event) {
    event.preventDefault();

    let temErro = false;

    mensagens.forEach(msg => msg.textContent = "");

    campos.forEach(campo => {
        const valor = campo.value.trim();
        const pMensagem = campo.nextElementSibling;

        if (campo.id === "nome" && valor.length <= 2) {
            pMensagem.textContent = "Nome deve ter no mínimo 3 caracteres";
            temErro = true;
        }

        if (campo.id === "sobrenome" && valor.length < 3) {
            pMensagem.textContent = "Sobrenome deve ter no mínimo 3 caracteres";
            temErro = true;
        }

        if (campo.id === "cpf" && valor.length <= 10) {
            pMensagem.textContent = "O CPF deve ter 11 dígitos.";
            temErro = true;
        }

        if (campo.id === "rg" && valor.length < 7) {
            pMensagem.textContent = "O RG deve ter no mínimo 7 dígitos.";
            temErro = true;
        }


        if (campo.id === "tel" && valor.length < 11) {
            pMensagem.textContent = "Telefone inválido.";
            temErro = true;
        }
    })

    // Direciona para próxima página
    if (!temErro) {
        setTimeout(() => {
            window.location.href = "./../pages/formulario_adocao_estrutura_familiar.html";
        }, 1000);
    }

}

form.addEventListener("submit", validaCampos);