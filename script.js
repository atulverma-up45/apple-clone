var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.6,
  centeredSlides: true,
  spaceBetween: 15,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});


var menu = document.querySelector(".ri-menu-3-line")
var close = document.querySelector(".ri-close-fill")
var nav = document.querySelector("#respo-nav")

menu.addEventListener("click",function(){
  nav.style.top = "0%"
})

close.addEventListener("click",function(){
  nav.style.top = "-100%"
})

