$(function () {
  $('#common-header').load('common-header.html');
  $('.common-foot').load('footer.html');

  // 动画效果
  new WOW().init();

  /**
   * 首页相关
   * @type {*|jQuery|HTMLElement}
   */
  var $box = $('.index_1-box'),
    item_len = $box.children().length;

  /**
   * 产品优势图片比例
   * @type {*|jQuery|HTMLElement}
   */
  var $itemimg = $('.advantage_1-item .img');
  var $adlf = $('.ad-lf');
  init();

  $(window).resize(function () {
    init();
  })

  function init() {
    $itemimg.height($itemimg.width());
    $('.advantage_2-item').height($adlf.width());
    $('.index_1-item').width($('.index_1').width() / item_len).css('padding', '1rem');
  }

  /**
   *  产品介绍 tab
   */
  // 小屏时tab切换的下拉修改
  $('.layui-tab-bar').children('i')
    .removeClass('layui-icon')
    .addClass('fa').addClass('fa-chevron-down')
    .css({color: '#666','font-size': '1rem'}).html('');
  // 设置最小高
  $('.layui-tab-content').css('min-height', $('.layui-tab-title').height() + 'px');
  // hover效果
  $('.introl_1 .img-box').hover(function () {
    $(this).siblings('.item-box_hover').show(200);
  }, function () {
    $(this).siblings('.item-box_hover').hide(200);
  })
});
