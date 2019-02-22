$(".nav-header").load("header.html");

// 一级导航显示
$('.nav-box').hover(function () {
  $('.nav-content').fadeIn(200);
  $('.nav-icon').attr('src', './img/icon-close.png').css('width', '17px');
}, function () {
  $('.nav-content').fadeOut(200);
  $('.nav-icon').attr('src', './img/icon-menu.png').css('width', '25px');
});

// 二级导航显示
$('.nav-icon-switch').on('click', function () {
  $('.nav-box').addClass('active');
  $(this).parent().addClass('color-yellow').siblings('.nav-second').fadeIn(200);
  $(this).parent().parent().siblings().children('.nav-second').fadeOut(150);
  $(this).parent().parent().siblings().children('.nav-first-a').removeClass('color-yellow');

  $(this).html('-').parent().parent().siblings().children().children('.nav-icon-switch').html('+');

  $(this).parent().siblings('.nav-second').css({'top': 50 * $(this).data('index') + 135 + 'px'});
});
