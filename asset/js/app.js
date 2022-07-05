var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      300:{

        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });