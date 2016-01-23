jQuery(document).ready(function ($) {

  var searchFields = $(".et_divi_100_custom_search_fields"),
    searchClose = $("et_divi_100_custom_search_fields--close"),
    searchHide = $("et_divi_100_custom_search_fields--hide");
  searchShow = $("et_divi_100_custom_search_fields--visible");

  // Appends current search to body
  // Replaces .et_search_outer with .et_divi_100_custom_search_fields
  // Removes unnessary div
  $(".et_search_outer")
    .insertAfter("#page-container")
    .removeClass("et_search_outer")
    .addClass("et_divi_100_custom_search_fields et_divi_100_custom_search_fields--hide")
    .html($(".et-search-form"));

  // Appends close button to search
  $(".et_divi_100_custom_search_fields").prepend("<span class='et_divi_100_custom_search_fields__close'></span>")

  // Close button removes visible class and adds hide class
  $(".et_divi_100_custom_search_fields").on("click", ".et_divi_100_custom_search_fields__close", function () {
    $(".et_divi_100_custom_search_fields")
      .removeClass("et_divi_100_custom_search_fields--visible")
      .addClass("et_divi_100_custom_search_fields--hide");
  });

  // Disables default click events
  $("#et_search_icon").click(function () {
    return false;
  });

  // Search icon removes hide class and adds visible class
  $("#et_search_icon").click(function () {
    $(".et_divi_100_custom_search_fields")
      .removeClass("et_divi_100_custom_search_fields--hide")
      .addClass("et_divi_100_custom_search_fields--visible");

    setTimeout(function () {
      $(".et-search-field").focus();
    }, 100);

    removal();
  });

  // Removes search if clicked outside container
  function removal() {
    if ($('.et_divi_100_custom_search_fields').hasClass('et_divi_100_custom_search_fields--visible')) {
      $("body *").not(".et_divi_100_custom_search_fields, .et_divi_100_custom_search_fields *, #et_search_icon").click(function () {

        $(".et_divi_100_custom_search_fields")
          .removeClass("et_divi_100_custom_search_fields--visible")
          .addClass("et_divi_100_custom_search_fields--hide");
      });
    }
  }
})