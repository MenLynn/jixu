$(function () {
  $(".header").load("header.html");
  $(".nav-box").load("left-nav.html");
  $(".footer-box").load("footer.html");

  var windowWidth;

  function init() {
    windowWidth = window.innerWidth;
    $('.nav-content').width(windowWidth - 120);

    if (windowWidth > 768) {
      $('.nav-box').show();
      $('.header').css('left','120px');
      $('.section').css('margin-left','120px');
    } else {
      $('.nav-box').hide();
      $('.header').css('left','0');
      $('.section').css('margin','0');
    }
  }

  setTimeout(function () {
    init();
  }, 100);

  $(window).resize(function () {
    init();
  });
});
