const radiosMoradia = document.querySelectorAll('input[name="moradia-cliente"]');
const blocoMoradia = document.getElementById("bloco-moradia-autorizacao");  

// Verifica qual campo foi selecionado
radiosMoradia.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "alugada") {
            blocoMoradia.classList.remove("esconder");
        } else {
            blocoMoradia.classList.add("esconder");

            const inputs = blocoMoradia.querySelectorAll("input");
            inputs.forEach(input => input.checked = false);
        }
    });
});

const forms = document.querySelector(".forms");

// Direciona para a próxima página
forms.addEventListener("submit", (event) => {
    event.preventDefault();
    setTimeout(() => {
        window.location.href = "/pages/formulario_adocao_companheiro_ideal.html";
    }, 1000);
});

