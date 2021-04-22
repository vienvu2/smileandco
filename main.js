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
    if ($(".menu").hasClass("active")) {
      $(".menu-bar").removeClass("active");
      $(".menu").removeClass("active");
    } else {
      $(".menu-bar").addClass("active");
      $(".menu").addClass("active");
    }
  });
  $(document).on("click", ".menu a", function () {
    console.log('21321')
    $(".menu-bar").removeClass("active");
    $(".menu").removeClass("active");
  });
});
