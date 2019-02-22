$(function () {
  $(".header").load("header.html");
  $(".nav-box").load("left-nav.html");
  $(".footer-box").load("footer.html");

  var windowWidth;
  var $itemlf = $('.detail-img');

  function init() {
    windowWidth = window.innerWidth;
    $('.nav-content').width(windowWidth - 120);

    if (windowWidth > 768) {
      $('.nav-box').show();
      $('.header').css('left', '120px');
      $('.section').css('margin-left', '120px');
      $itemlf.width($('.news-detail').width() * 0.46);
    } else {
      $('.nav-box').hide();
      $('.header').css('left', '0');
      $('.section').css('margin', '0');
      $itemlf.width($('.news-detail').width());
    }

    $itemlf.height($itemlf.width() * 0.67);
  }

  setTimeout(function () {
    init();
  }, 100);

  $(window).resize(function () {
    init();
  });
});
