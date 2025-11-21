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

const PET_DATA = {
  jade: {
    nome: "Jade",
    idade: "2 anos",
    sexo: "Fêmea",
    tipo: "Gata",
    raca: "Bombaim",
    ong: "Miados e Latidos",
    castrada: "Sim",
    vacina: "V4 e Antirrábica",
    historia: "Foi resgatada filhote, hoje está totalmente recuperada e sociável.",
    img: "/img/pet-criterios-adocao1.png"
  },
  apollo: {
    nome: "Apollo",
    idade: "3 anos",
    sexo: "Macho",
    tipo: "Cachorro",
    raca: "Vira-lata Terrier",
    ong: "Patas Amigas",
    castrada: "Sim",
    vacina: "V8 e Antirrábica",
    historia: "Encontrado abandonado na rua, é muito dócil, brincalhão e adora correr no parque.",
    img: "/img/pet-criterios-adocao2.png"
  },
  fred: {
    nome: "Fred",
    idade: "5 anos",
    sexo: "Macho",
    tipo: "Cachorro",
    raca: "Jack Russell",
    ong: "Anjos de Quatro Patas",
    castrada: "Sim",
    vacina: "V10 e Antirrábica",
    historia: "Um cão de guarda muito amigável. Ideal para casa com quintal e experiência com cães de porte médio.",
    img: "/img/pet-criterios-adocao3.png"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('adocaoModal');
  const openButtons = document.querySelectorAll('.adotar-button');
  const closeButton = document.getElementById('fecharModal');

  // Função principal: Preencher o modal com os dados do pet
  const loadPetData = (petKey) => {
    const data = PET_DATA[petKey];

    // Se os dados não existirem, não faça nada
    if (!data) return;

    // Preenche os elementos do modal com os dados do pet
    document.getElementById('modalPetImg').src = data.img;
    document.getElementById('modalPetImg').alt = `Foto de ${data.nome}`;

    document.getElementById('modalNome').textContent = data.nome;
    document.getElementById('modalNomeHistorico').textContent = data.nome;
    document.getElementById('modalIdade').textContent = data.idade;
    document.getElementById('modalSexo').textContent = data.sexo;
    document.getElementById('modalTipo').textContent = data.tipo;
    document.getElementById('modalRaca').textContent = data.raca;

    document.getElementById('modalONG').textContent = data.ong;
    document.getElementById('modalCastrada').textContent = data.castrada;
    document.getElementById('modalVacina').textContent = data.vacina;
    document.getElementById('modalHistoria').textContent = data.historia;

    // Abre o modal
    modal.classList.add('active');
  };

  // Evento de clique para ABRIR o modal
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Pega a chave do pet (jade, apollo, fred) do atributo data-pet
      const petKey = button.getAttribute('data-pet');
      loadPetData(petKey);
    });
  });

  // Evento de clique para FECHAR o modal (botão VOLTAR)
  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Evento de clique para FECHAR o modal (clique no overlay)
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  });
});

const btnContinuar = document.querySelector("#btn-continuar");

btnContinuar.addEventListener("click", () => {
  window.location.href = "/pages/formulario_adocao.html";
});
