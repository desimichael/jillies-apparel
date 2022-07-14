// const menuToggle = document.querySelector('.menuToggle');
// const nav = document.querySelector('.header-nav');


let toggles = document.getElementsByClassName('footer-mobile__toggle');
let mobileContent = document.getElementsByClassName('footer-mobile__content');
let icons = document.getElementsByClassName('footer-mobile__icon');

// Header Mobile Menu


// function toggleMenu() {
//   menuToggle.classList.toggle('active');
//   nav.classList.toggle('active');
// }


// Footer Mobile Menu
for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    if (parseInt(mobileContent[i].style.height) != mobileContent[i].scrollHeight) {
      mobileContent[i].style.height = mobileContent[i].scrollHeight + "px";
      icons[i].classList.remove('fa-plus');
      icons[i].classList.add('fa-minus');
    } else {
      mobileContent[i].style.height = "0px";
      icons[i].classList.remove('fa-minus');
      icons[i].classList.add('fa-plus');
    }
    for (let j = 0; j < mobileContent.length; j++) {
      if (j !== i) {
        mobileContent[j].style.height = "0px";
        icons[j].classList.remove('fa-minus');
        icons[j].classList.add('fa-plus');
      }
    }
  });
}
