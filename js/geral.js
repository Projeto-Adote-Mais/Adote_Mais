// Espera o VLibras e o UserWay carregarem
document.addEventListener("DOMContentLoaded", () => {
    const vlibrasWrapper = document.querySelector("[vw-plugin-wrapper]");

    if (!vlibrasWrapper) return;

    // Observador de mudanças na classe
    const observer = new MutationObserver(() => {
        if (vlibrasWrapper.classList.contains("active")) {
            // VLibras ABRIU → esconde UserWay
            if (window.UserWay) UserWay.iconVisibilityOff();
        } else {
            // VLibras FECHOU → mostra UserWay
            if (window.UserWay) UserWay.iconVisibilityOn();
        }
    });
    // Observa qualquer alteração nas classes
    observer.observe(vlibrasWrapper, { attributes: true, attributeFilter: ["class"] });
});

