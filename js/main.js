$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector("#body").classList.toggle("body-locked");
    document.querySelector(".menu-button").classList.toggle("menu-button--close");
    document.querySelector(".navbar-group").classList.toggle("navbar-group--visible");
  });

  var tabItem = $(".tab__item");
  var contentItem = $(".content__item");
  tabItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabItem.removeClass("tab__item--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("tab__item--active");
  });
});
