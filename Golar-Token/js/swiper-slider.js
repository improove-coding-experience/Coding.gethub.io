var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,

    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 10,
      },

      1920: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
     
    },

  });