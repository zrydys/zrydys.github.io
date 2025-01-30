console.log('gal st parent.');

const parprefix=window.parent.location.href.replace(/\?.*/,'').replace(/.*\//,'');

    // Simple navigation function <a href="#" target="_parent">Link Text</a>
    function goTo(page) {
        if ('?' !== page[0]) {
        //window.location.href = page; // Navigate to the selected page
        window.parent.location.href = page; // Navigate to the selected page
	    } else {window.parent.location.href = parprefix+page; } 
        
    }

    function goIn() {

        window.parent.location.href.replace(/\?/,'?x=-2&');
        
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

console.log('gal OK parent. ');
