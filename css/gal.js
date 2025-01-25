console.log('gal st');

    // Simple navigation function
    function goTo(page) {
        window.location.href = page; // Navigate to the selected page
    }
    
    //scroll arrows
    const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const gallery = document.querySelector('.gallery');

rightBtn.addEventListener('click', () => {
  gallery.scrollBy({
    left: 150, // Scrolls 150px to the right when the right button is clicked
    behavior: 'smooth'
  });console.log('gal click rg');
});

leftBtn.addEventListener('click', () => { console.log('gal click');
  gallery.scrollBy({
    left: -150, // Scrolls 150px to the left when the left button is clicked
    behavior: 'smooth'
  });
});

console.log('gal OK');
