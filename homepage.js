document.addEventListener('DOMContentLoaded', function () {
  const characters = document.querySelectorAll('.character');

  characters.forEach(character => {
    character.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      alert(`You selected character ${parseInt(index) + 1}`);
    });
  });
});
