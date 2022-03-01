// =========== Preloader
(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });
})(jQuery);

// Transition Bar
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("active");
    $(".navbar").addClass("shadow-sm");
  } else {
    $(".navbar").removeClass("active");
    $(".navbar").removeClass("shadow-sm");
  }
});

// Navlink Active
const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Swiper Js
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    312: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
    },
    662: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 15,
      centeredSlides: true,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Filter Our Portfolio
let list = document.querySelectorAll(".list");
let itemPortfolio = document.querySelectorAll(".item__portfolio");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemPortfolio.length; k++) {
      itemPortfolio[k].classList.remove("active");
      itemPortfolio[k].classList.add("hide");

      if (itemPortfolio[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
        itemPortfolio[k].classList.remove("hide");
        itemPortfolio[k].classList.add("active");
      }
    }
  });
}
