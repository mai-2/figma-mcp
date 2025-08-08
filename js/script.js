document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.js-hamburger');
  const body = document.querySelector('body');
  const nav = document.querySelector('.l-header__nav');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      body.classList.toggle('is-active');
      this.classList.toggle('is-active');
      if (nav) {
        nav.classList.toggle('is-active');
      }
    });
  }
});
