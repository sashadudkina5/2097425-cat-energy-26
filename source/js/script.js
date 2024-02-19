// mobile navigation menu

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// before/after slider

document.getElementById('beforeAfterSlider').addEventListener('input', function(e) {
  const sliderValue = e.target.value;
  const afterElement = document.querySelector('.slider__before-after-container .after');

  afterElement.style.width = sliderValue + '%';
});
