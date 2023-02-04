const section1 = document.querySelector('.header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    section1.classList.add('active')
  } else {
    section1.classList.remove('active')
  }
})
