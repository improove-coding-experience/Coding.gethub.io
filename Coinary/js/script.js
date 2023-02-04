// Swiper Configuration
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 10,
  centeredSlides: false,
  freeMode: true,
  // grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  breakpoints: {
    575: {
      slidesPerView: 1
    }, 767: {
      slidesPerView: 2
    }, 991: {
      slidesPerView: 2
    }, 1199: {
      slidesPerView: 4
    }, 1399: {
      slidesPerView: 4
    }

  }
});

// *************************Tooltop*******************
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
