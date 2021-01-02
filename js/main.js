$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector("#body").classList.toggle("body-locked");
    document.querySelector(".menu-button").classList.toggle("menu-button--close");
    document.querySelector(".navbar-group").classList.toggle("navbar-group--visible");
  });

  $(document).click(function (e) {
    if (
      !$(".menu-button,.navbar-group").is(e.target) &&
      $(".navbar-group").has(e.target).length === 0
    ) {
      $("#body").removeClass("body-locked");
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
});
