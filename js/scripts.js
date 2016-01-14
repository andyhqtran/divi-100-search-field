jQuery(document).ready(function ($) {
  $('header .et_search_outer').clone().addClass('et_search_outer_cloned et_search_outer_style_1').appendTo('body');

  $('header .et_search_outer').remove();

  $('.et_close_search_field').on('click', function () {
    $('.et_search_outer .et_search_form_container').removeClass('et_pb_search_visible');
  });

  $('#et_search_icon').click(function () {
    return false;
  });

  $('#et_search_icon').click(function () {
    $('.et_search_form_container').addClass('et_pb_search_visible et_pb_no_animation');
  });
})