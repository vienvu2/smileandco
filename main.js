AOS.init({
  once: true,
  duration: 1000,
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
});
