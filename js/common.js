$(function () {
  // $('#panel-menu').load('common-menu.html');
  // $('.aa').load('common-header.html');
  $('.common-foot').load('footer.html');

  // 动画效果
  new WOW().init();

  // 菜单
  $("#menu").mmenu({
    "extensions": [
      "position-bottom",
      ""
    ],
    "offCanvas": {
      "position": "right"
    }
  });

  $('.index-two').hover(function () {
    $('.index-two .mask').addClass('active')
  }, function () {
    $('.index-two .mask').removeClass('active')
  });
});
