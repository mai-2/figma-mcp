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

  const gallerySwiper = new Swiper('.js-gallery-slider', {
    loop: true,
    pagination: {
      el: '.js-gallery-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.js-gallery-next',
      prevEl: '.js-gallery-prev',
    },
  });

  const toTop = document.querySelector(".js-to-top");
  if (toTop) {
    toTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
