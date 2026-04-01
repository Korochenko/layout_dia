'use strict';

const form = document.querySelector('.footer__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  form.reset();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const slider = [
  null,
  'header__bottom--slide-2',
  'header__bottom--slide-3',
];

let current = 0;

const bg = document.querySelector('.header__bottom');
const [btnLeft, btnRight] = document.querySelectorAll('.slider__button');

function setSlide(index) {
  bg.className = 'header__bottom';
  if (slider[index]) {
    bg.classList.add(slider[index]);
  }
}

setSlide(0);

btnLeft.addEventListener('click', () => {
  current = (current - 1 + slider.length) % slider.length;
  setSlide(current);
});

btnRight.addEventListener('click', () => {
  current = (current + 1) % slider.length;
  setSlide(current);
});
