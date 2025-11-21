const radiosCrianca = document.querySelectorAll('input[name="familia-crianca"]');
const blocoCriancas = document.getElementById("bloco-criancas");

// Verifica qual campo foi selecionado
radiosCrianca.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "sim") {
            blocoCriancas.classList.remove("esconder");
        } else {
            blocoCriancas.classList.add("esconder");

            // limpa se escolher "não"
            const inputs = blocoCriancas.querySelectorAll("input");
            inputs.forEach(input => input.checked = false);
        }
    });
});

const radiosAnimais = document.querySelectorAll('input[name="animal-estimacao"]');
const blocoAnimais = document.getElementById("bloco-animais");

// Verifica qual campo foi selecionado
radiosAnimais.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "sim") {
            blocoAnimais.classList.remove("esconder");
        } else {
            blocoAnimais.classList.add("esconder");

            // limpa se escolher "não"
            const inputs = blocoAnimais.querySelectorAll("input");
            inputs.forEach(input => {
                input.checked = false;
            });
        }
    });
});

const forms = document.querySelector(".forms");

// Direciona para a próxima página
forms.addEventListener("submit", (event) => {
    event.preventDefault();
    setTimeout(() => {
        window.location.href = "./../pages/formulario_adocao_estrutura_residencial.html";
    }, 1000);
});