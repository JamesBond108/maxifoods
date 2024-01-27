function displayWelcome() {
    // Get references to the h1 and h3 elements
    var h1Element = document.getElementById('welcomeTitle');
    var h3Element = document.getElementById('welcomeSubtitle');

    // Display the welcome message with animations
    h1Element.innerText = 'Welcome to Frisco';
    h1Element.classList.add('fade-in', 'rotate-scale', 'fade-out'); // Here: Added 'fade-out'

    // Delay the display of the second message for a smoother transition
    setTimeout(function() {
        // Here: Added a 5-second delay
        h3Element.innerText = 'What would you love to eat today';
        h3Element.classList.add('fade-in');
      }, 2000);
  }