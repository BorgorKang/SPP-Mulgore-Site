// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the scrollable element by its id
    const scrollableElement = document.getElementById('myScrollableBox');
    // Create a new SimpleBar instance
    new SimpleBar(scrollableElement);
  });
  