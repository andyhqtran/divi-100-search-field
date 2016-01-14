jQuery(document).ready(function ($) {
  $('header .et_search_outer').clone().addClass('et_search_outer_cloned et_search_outer_style_1').appendTo('body');

  $('header .et_search_outer').remove();

  $('.et_close_search_field').on('click', function () {
    $('.et_search_outer .et_search_form_container').removeClass('et_pb_search_visible');
  });
})