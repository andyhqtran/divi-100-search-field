<?php

/**
* @package Custom_Search_Fields
* @version 0.0.1
*/

/*
* Plugin Name: Custom Search Fields
* Plugin URI: https://elegantthemes.com/
* Description: TODO
* Author: Andy Tran
* Version: 0.0.1
* Author URI: http://andy.design/
* License: GPL3
*/

add_action( 'wp_enqueue_scripts', 'add_custom_search_fields_scripts' );

function add_custom_search_fields_scripts() {
  wp_enqueue_script(
    'custom-search-fields',
    plugin_dir_url( __FILE__ ) . 'js/custom-search-fields.js',
    array( 'jquery' )
  );
}

?>