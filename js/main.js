$(document).ready(function () {
  var tabItem = $(".tab__item");
  var contentItem = $(".content__item");

  tabItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabItem.removeClass("tab__item--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).addClass("content__item--active");
  });
});
