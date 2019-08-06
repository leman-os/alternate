$(function() {

	/* navigation sub-menu display */

// Change 'hover' to 'click' if you want to
$('.nav li > .sub-menu').parent().hover(function() {
	var submenu = $(this).children('.sub-menu');
	if ( $(submenu).is(':hidden') ) {
	  $(submenu).slideDown(200);
	} else {
	  $(submenu).slideUp(200);
	}
	});
	$(document).ready(function(){
		$('.bxslider').bxSlider();
	});
	
	// $('.figcaption').hover(
	// 	function(){
	// 	  $('.timg').hide();
	// 	});
		$( ".hov" ).mouseenter(function() {
			$( ".timg" ).hide(function() {

			});
		  });
		$( ".hov" ).mouseleave(function() {
			$( ".timg" ).show(function() {

			});
		  });
		
		
});


