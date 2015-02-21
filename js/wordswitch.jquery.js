// JQuery plugin for switching word
var lert = function(d){console.log(d)};
(function ( $ ) {
$.fn.wordswitch = function(options) {
	var settings = $.extend({
            // These are the defaults.
            delay: "3s",
            separator: ","
        }, options );
	return this.each(function() {
		//logics here
		var h = "";
		var $t = $(this);
		var words = $t.html().split(settings.separator);
		$.each( words, function( key, value ) {
			value = $.trim(value);
		  lert( key + ": " + value );
		  
		});
		//lert(words);
		return this;
	});
};
}( jQuery ));





$( ".wordswitch" ).wordswitch(); // Makes all the links green.



