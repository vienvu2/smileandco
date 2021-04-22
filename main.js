AOS.init({
  once: true,
  duration: 1000,
  disable: "mobile",
});

$(function () {
  $(".date").datepicker();

  $("#button").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#elementtoScrollToID").offset().top,
      },
      2000
    );
  });

  $(".menu-bar").click(function () {
    $(".menu-bar").toggleClass("active");
    $(".menu").toggleClass("active");
  });
});
