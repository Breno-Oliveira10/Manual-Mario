function toggleMenu() {
    var navbarLinks = document.getElementById("nav-links");
    var menuIcon = document.querySelector('.menu-icon');
    var closeIcon = document.querySelector('.close-icon');
  
    navbarLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
  }

  