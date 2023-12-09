const port = 8000;

document.getElementById('exploreBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  // Add the slide-in effect to the container
  document.querySelector('.container').classList.add('slide-in');

  // Simulate a delay (you can adjust this)
  setTimeout(function() {
      // Redirect to the explore page after the slide-in effect
      window.location.href = 'html/homepage.html';
  }, 500); // 500 milliseconds, matches the transition duration in CSS
});
