// JQuery plugin for switching word
(function ( $ ) {
$.fn.wordswitch = function() {
	return this.each(function() {
		//logics here
		this.css( "color", "green" );
		return this;
	});
};
}( jQuery ));
 
$( ".wordswitch" ).wordswitch(); // Makes all the links green.