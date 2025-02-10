function navbarToggle(){


    let menuBar = document.querySelector("#menuBtn");
    let navLinks = document.querySelector(".navLinks");

    menuBar.onclick = () => {
        navLinks.classList.toggle("toggle")
    }

}
function swipper() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
}
navbarToggle()
// swipper()