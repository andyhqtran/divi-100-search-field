jQuery(document).ready(function ($) {

  // Appends current search to body
  // Replaces .et_search_outer with .et_custom_search
  // Removes unnessary div
  $(".et_search_outer")
    .insertAfter("#page-container")
    .removeClass("et_search_outer")
    .addClass("et_custom_search et_custom_search_hide")
    .html($(".et-search-form"));

  // Appends close button to search
  $(".et_custom_search").prepend("<span class='et_custom_search_close'>x</span>")

  // Close button removes visible class and adds hide class
  $(".et_custom_search").on("click", ".et_custom_search_close", function () {
    $(".et_custom_search").removeClass("et_custom_search_visible").addClass(".et_custom_search_hide");
  });

  // Disables default click events
  $("#et_search_icon").click(function () {
    return false;
  });

  // Search icon removes hide class and adds visible class
  $("#et_search_icon").click(function () {
    $(".et_custom_search")
      .removeClass("et_custom_search_hide")
      .addClass("et_custom_search_visible");
  });
})