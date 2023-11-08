const header = document.querySelector('.header');
let toggles = document.getElementsByClassName('footer-mobile__toggle');
let mobileContent = document.getElementsByClassName('footer-mobile__content');
let icons = document.getElementsByClassName('footer-mobile__icon');




// Sticky Header
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    header.classList.add('header--sticky');
  } else {
    header.classList.remove('header--sticky');
  }
});

// Mobile Toggle
document.onclick = () => {
  let openMobile = document.getElementsByClassName('open__mobile-menu')[0];
  let mobileMenu = document.getElementsByClassName('header-mobile')[0];
  let closeMobile = document.getElementsByClassName('header-mobile__close-btn')[0];
  
  openMobile.addEventListener('click', () => {
    mobileMenu.classList.add('header-mobile--visible');
  });
  closeMobile.addEventListener('click', () => {
    mobileMenu.classList.remove('header-mobile--visible');
  });
}

// Product Rating


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
