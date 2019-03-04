$(function () {
  // $('.header').load('header.html');
  $('.footer').load('footer.html');
  // 动画效果
  new WOW().init();

  layui.use('element', function () {
    var element = layui.element;
  });

  init();

  $(window).resize(function () {
    init();
  });

  function init() {
    if (window.innerWidth > 768) {
      $('.header-search').removeClass('is-click_show');
    }
    var $biwinImg = $('.biwin-box .item-img');
    $biwinImg.height($biwinImg.width() * 0.75);
  }

  // 回到顶部
  $('.to_top').on('click', function(){
    $("html, body").animate({scrollTop: 0}, "1s");
  });

  // 二级菜单
  $('.nav-show').on('click', function () {
    console.log(22);
    $('.header .layui-nav-tree').toggle();
  });

  // 控制搜索框显示
  $('.search-show').on('click', function () {
    var $sibling = $(this).parent().siblings('.header-search');
    if ($sibling.hasClass('is-click_show')) {
      $sibling.removeClass('is-click_show');
    } else {
      $sibling.addClass('is-click_show');
    }
  });

  $('.question-box .layui-colla-title').on('click', function () {
    if ($(this).siblings().hasClass('layui-show')) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
    }
  })
});
