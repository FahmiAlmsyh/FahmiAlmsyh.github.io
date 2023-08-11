const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });

  // Navbar Toggle Button
const toggleButton = document.getElementsByClassName("toggle")[0];
const navbarItem = document.getElementsByClassName("navbar-item");
toggleButton.addEventListener("click", function () {
  // transition navbar item
  for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].classList.toggle("active");
  }
});

  
//   let header = document.querySelector("header");
//   let menu = document.querySelector("#menu-icon");
//   let navbar = document.querySelector(".navbar");
  
//   window.addEventListener("scroll", () => {
//     header.classList.toggle("shadow", window.scrollY > 0);
//   });
  
//   menu.onclick = () => {
//     navbar.classList.toggle("active");
//   };
//   window.onscroll = () => {
//     navbar.classList.remove("active");
//   };