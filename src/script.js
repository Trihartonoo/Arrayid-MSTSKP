const MenuBtn = document.querySelector('.Menu-btn');
const MenuList = document.querySelector('.Menu-list');
const MenuClose = document.querySelector('.Close-menu');
const Navbar = document.querySelector('.Navbar');

MenuBtn.addEventListener('click', () => {
  MenuList.classList.toggle('Menu-list-active');
});
MenuClose.addEventListener('click', () => {
  MenuList.classList.remove('Menu-list-active');
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    Navbar.classList.add('Navbar-scroll');
  } else {
    Navbar.classList.remove('Navbar-scroll');
  }
});
