// Burger menu

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu__button");
  let links = menu.find(".burger-menu__link");
  let overlay = menu.find(".burger-menu__overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");
    if (menu.hasClass("burger-menu_active")) {
      // calling burger menu
      $("body").css("overflow", "hidden");
      $(".burger-header-menu").css("display", "flex");
      // $(".header__container").css("paddingTop", "120px");
    } else {
      // when clicking outside the burger menu
      $("body").css("overflow", "visible");
      $(".burger-header-menu").css("display", "none");
      // $(".header__container").css("paddingTop", "24px");
    }
  }
}
burgerMenu(".burger-menu");

// Main Slider

const swiperMain = new Swiper(".main-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".main-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-swiper-button-next",
    prevEl: ".main-swiper-button-prev",
  },
});

// Top Sales Slider

const swiperTopSales = new Swiper(".top-sales-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".top-sales-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".top-sales-swiper-button-next",
    prevEl: ".top-sales-swiper-button-prev",
  },
});

// Novelties Slider

const swiperNovelties = new Swiper(".novelties-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".novelties-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".novelties-swiper-button-next",
    prevEl: ".novelties-swiper-button-prev",
  },
});

// We recommend Slider

const swiperRecommend = new Swiper(".recommend-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".recommend-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".recommend-swiper-button-next",
    prevEl: ".recommend-swiper-button-prev",
  },
});

// Sale Slider

const swiperSale = new Swiper(".sale-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".sale-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".sale-swiper-button-next",
    prevEl: ".sale-swiper-button-prev",
  },
});

// Feedback Slider

const swiperFeedback = new Swiper(".feedback-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".feedback-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".feedback-swiper-button-next",
    prevEl: ".feedback-swiper-button-prev",
  },
});
