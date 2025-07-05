var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
const body = document.querySelector('body'),
  navMenu = body.querySelector('.nav-content'),
  navOpenBtn = body.querySelector('.navOpen-btn'),
  navCloseBtn = navMenu.querySelector('.navClose-btn');
if (navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
      navMenu.classList.add("open");
      body.style.overflowY = "hidden";
  })
}
if (navMenu && navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
  })
}
const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
      item.classList.toggle("open");
      let description = item.querySelector(".description");
      if (item.classList.contains("open")) {
          description.style.height = `${description.scrollHeight}px`;
          item.querySelector("i").classList.replace("fa-plus", "fa-minus");
      } else {
          description.style.height = "0px";
          item.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
      removeOpen(index);
  })
})
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
          item2.classList.remove("open");

          let des = item2.querySelector(".description");
          des.style.height = "0px";
          item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
  })
}
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY > 5) {
      document.querySelector("header").classList.add("header-active");
  } else {
      document.querySelector("header").classList.remove("header-active");
  }
  const scrollUpBtn = document.querySelector('.scrollUp-btn');
  if (scrollY > 250) {
      scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
      scrollUpBtn.classList.remove("scrollUpBtn-active");
  }
})
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .footer-content, .footer-links, .faq`, {
  interval: 100,
})
sr.reveal(`.about-imageContent, .menu-items`, {
  origin: 'left'
})
sr.reveal(`.about-details, .time-table`, {
  origin: 'right'
})