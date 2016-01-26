jQuery(document).ready(function ($) {
	// Update preview whenever select is changed
	$('.form-table select').change( function() {
		var $select          = $(this),
			preview_prefix   = $select.attr( 'data-preview-prefix' ),
			$selected_option = $select.find('option:selected'),
			selected_value   = $selected_option.val(),
			preview_file     = preview_prefix + selected_value,
			$preview_wrapper = $select.parents('td').find('.option-preview'),
			$preview         = $('<img />', {
				src : et_divi_100_custom_search_fields.preview_dir_url + preview_file + '.gif'
			});

		if( selected_value !== '' ) {
			$preview_wrapper.show();
			$preview_wrapper.html( $preview );
		} else {
			$preview_wrapper.hide();
			$preview_wrapper.empty();
		}
	});
});