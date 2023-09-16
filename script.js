
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('show');
        const content = document.querySelector(".content");
        const offcanvasMenu = document.querySelector('.offcanvas-menu');
        if(offcanvasMenu.style.top === '-100%')
        {
            offcanvasMenu.style.top =  '0';
            content.style.marginTop = "135px";
        }
        else
        {
            offcanvasMenu.style.top =  '-100%'; 
            content.style.marginTop="0px";
        }
    }
    const clickedDivs = []; 

function handle(event) {
  const clickedDiv = event.target;

 
  if (!clickedDivs.includes(clickedDiv.className)) {
    clickedDivs.push(clickedDiv.className);
  }

  const styles = window.getComputedStyle(clickedDiv);

  if (styles.backgroundColor === "rgb(0, 0, 139)") {
    clickedDiv.style.backgroundColor = "#8B0000";
  }


  if (event.target.classList.contains("box29")) {
    const colorChangeInterval = setInterval(changeColor, 1000);
    let currentIndex = 0;

    function changeColor() {
      if (currentIndex < clickedDivs.length) {
      
        const className = clickedDivs[currentIndex];
        const div = document.querySelector(`.${className}`);
        div.style.backgroundColor = "rgb(0, 0, 139)";
        currentIndex++;
      } else {
        clearInterval(colorChangeInterval); 
        clickedDivs.length = 0; 
      }
    }
  }
}
