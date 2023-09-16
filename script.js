
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('show');
    
       
        const offcanvasMenu = document.querySelector('.offcanvas-menu');
        offcanvasMenu.style.top = (offcanvasMenu.style.top === '-100%') ? '0' : '-100%';

    }

