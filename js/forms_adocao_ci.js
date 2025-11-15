const radiosEspecie = document.querySelectorAll('input[name="especie"]');
const blocoPorte = document.getElementById("bloco-porte");


radiosEspecie.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "cachorro") {
            blocoPorte.classList.remove("esconder");
        } else {
            blocoPorte.classList.add("esconder");

            // limpa se escolher "gato"
            const inputs = blocoPorte.querySelectorAll("input");
            inputs.forEach(input => input.checked = false);
        }
    });
});


const forms = document.querySelector(".forms");

// Direciona para a próxima página
forms.addEventListener("submit", (event) => {
    event.preventDefault();
    setTimeout(() => {
        window.location.href = "/pages/agradecimento.html";
    }, 1000);
});