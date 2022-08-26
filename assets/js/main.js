(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });


	$(document).ready(function() {

		// Hide and Show form fields for Search page
		$("#contract-search-fields").parent('div').hide('fast');

		$("#expand-search-fields").click(function(event) {
			$('div.hideShow').show("fast");
			$(this).parent('div').hide('fast');
			$("#contract-search-fields").parent('div').show('fast');
			event.preventDefault();
		});

		$("#contract-search-fields").click(function(event) {
			$('div.hideShow').hide("fast");
			$(this).parent('div').hide("fast");
			$("#expand-search-fields").parent('div').show("fast");

			resetCollapsedFields();

			event.preventDefault();
		});

	});

	// In your Javascript (external .js resource or <script> tag)
	$(document).ready(function() {
		$('#clientList').select2();
		$('#clientList2').select2();
	});

})(jQuery);

