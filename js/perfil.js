<script>
  document.querySelectorAll('.ver-mais').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      var section = this.closest('section');
      var cardsContainer =
        section.querySelector('.card-pet1') ||
        section.querySelector('.vet-pet1');

      if (!cardsContainer) return;

      cardsContainer.classList.toggle('mostrar-todos');

      if (cardsContainer.classList.contains('mostrar-todos')) {
        this.textContent = 'Ver menos';
      } else {
        this.textContent = 'Ver mais';
      }
    })
  });
</script>

