$(document).ready(function() {
	//slider
	$('.book__slider').slick();
	//menu
	$( ".nav__trigger button" ).click(function() {
		$( ".nav__js" ).toggleClass( "active" );
	});
	$( ".nav__close button" ).click(function() {
		$( ".nav__js" ).removeClass( "active" );
	});

	//date
	$('.datepicker').datepicker({
		format: 'dd/M'
	});
});