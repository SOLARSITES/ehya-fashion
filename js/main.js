$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".menu-button").classList.toggle("menu-button--close");
    document.querySelector(".navbar-group").classList.toggle("navbar-group--visible");
    document.querySelector(".navbar-overlay").classList.toggle("navbar-overlay--visible");
  });

  $(document).mousedown(function (e) {
    if (
      !$(".menu-button,.navbar-group").is(e.target) &&
      $(".navbar-group").has(e.target).length === 0
    ) {
      $(".navbar-overlay").removeClass("navbar-overlay--visible");
      $(".menu-button").removeClass("menu-button--close");
      $(".navbar-group").removeClass("navbar-group--visible");
    }
  });

  var tabItem = $(".trends-menu__item");
  var contentItem = $(".trends-content");
  tabItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabItem.removeClass("trends-menu__item--active");
    contentItem.removeClass("trends-content--active");
    $(activeContent).addClass("trends-content--active");
    $(this).addClass("trends-menu__item--active");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $(".menu-button").removeClass("menu-button--close");
    $(".navbar-group").removeClass("navbar-group--visible");
    $(".navbar-overlay").removeClass("navbar-overlay--visible");
    $(this).attr("navbar__button", true);
    $(".modal__close").focus();
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("[navbar__button]").focus();
  }

  $(document).mousedown(function (e) {
    if (
      !$(".modal__close,.modal__dialog").is(e.target) &&
      $(".modal__dialog").has(e.target).length === 0
    ) {
      closeModal(e);
    }
  });

  $(window).keyup(function (e) {
    if (e.keyCode == 27) {
      closeModal(e);
    }
  });

  //Валидация форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        phone: {
          required: true,
          minlength: 18,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, укажите Ваше полное имя!",
          minlength: "Имя должно содержать не менее 2-х букв!",
        },
        phone: {
          required: "Пожалуйста, укажите Ваш телефон!",
          minlength: "Телефон должен быть в формате +7 (xxx) xxx-xx-xx",
        },
        email: {
          required: "Пожалуйста, укажите Ваш E-mail!",
          email: "E-mail должен быть в формате name@domain.com",
        },
        newsletter_email: {
          required: "Пожалуйста, укажите Ваш E-mail!",
          email: "E-mail должен быть в формате name@domain.com",
        },
      },
    });
  });

  $(`[type="tel"]`).mask("+7 (000) 000-00-00");

  var reviewsSlider = new Swiper(".reviews-slider", {
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        // this.el.addEventListener("mouseleave", () => {
        //   this.autoplay.start();
        // });
      },
    },

    initialSlide: 1,

    // autoplay: {
    //   delay: 7000,
    //   disableOnInteraction: false,
    // },

    loop: true,

    pagination: {
      el: ".reviews-slider__pagination",
      bulletClass: "reviews-slider__bullet",
      bulletActiveClass: "reviews-slider__bullet--active",
      clickable: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    speed: 750,
  });
});
