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

const btnLogoHeader = document.querySelector(".link-logo-header");
btnLogoHeader.addEventListener("click", (event) => {
  event.preventDefault();
});

const btnAdote = document.querySelector(".adote");
btnAdote.addEventListener("click", () => {
  window.location.href = "./pages/adocao.html";
});
