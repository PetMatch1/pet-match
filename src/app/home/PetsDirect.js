const clickableCards = document.querySelectorAll('.clickable-card');

// add click event listener to each card
clickableCards.forEach(card => {
  card.addEventListener('click', () => {
    // get the href attribute from the data-href attribute
    const href = card.getAttribute('data-href');
    
    // go to the href location
    window.location.href = href;
  });
});
