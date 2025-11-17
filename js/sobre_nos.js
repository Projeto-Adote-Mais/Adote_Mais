const btnMobile = document.getElementById("btn-mobile");
const navMobile = document.getElementById("nav-mobile");

// Ativa nav mobile
btnMobile.addEventListener("click", () => {
  navMobile.classList.toggle("active");
});

// Esconde nav mobile com relação ao tamanho da janela
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    navMobile.classList.remove("active");
  }
});

const forms = document.querySelector(".forms");
const feedback = document.querySelector(".p-feedback");

// Verifica campos e exibe mensagem
forms.addEventListener("submit", (event) => {
  event.preventDefault();

  const campos = forms.querySelectorAll("input, textarea");

  let vazio = false;

  campos.forEach(campo => {
    if (campo.value.trim() === "") {
      vazio = true;
    }

  });

  if (vazio) {
    feedback.textContent = "Por favor, preencha todos os campos.";
    feedback.style.color = "#FCA11D";

  } else {
    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.style.color = "#8AD83F";

  }

});