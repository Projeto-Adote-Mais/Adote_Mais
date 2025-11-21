document.addEventListener("DOMContentLoaded", function () {
    
  const detalhes = document.querySelectorAll("details");

  detalhes.forEach((umItem) => {
    umItem.addEventListener("click", () => {
      detalhes.forEach((outroItem) => {
        if (outroItem !== umItem) {
          outroItem.removeAttribute("open");
        }
      });
    });
  });
});