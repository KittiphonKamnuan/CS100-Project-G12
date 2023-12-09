const port = 8000;

document.addEventListener('DOMContentLoaded', function () {
  const characters = document.querySelectorAll('.character');

  characters.forEach(character => {
    character.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      alert(`You selected character ${parseInt(index) + 1}`);

      // Redirect to activity page based on the selected character
      switch (parseInt(index)) {
        case 0:
          window.location.href = 'activity1.html';
          break;
        case 1:
          window.location.href = 'activity2.html';
          break;
        case 2:
          window.location.href = 'activity3.html';
          break;
        // Add more cases if you have additional characters
        default:
          // Handle the default case (optional)
      }
    });
  });
});
