// JQuery plugin for switching word
var lert = function(d){console.log(d)};
(function ( $ ) {
$.fn.wordswitch = function(options) {
	var settings = $.extend({
            // These are the defaults.
            delay: 1,
            separator: ","
        }, options );
	var switcherCounts = 0;
	return this.each(function() {
		//logics here
		switcherCounts+=1;
		var h = '<div class="ws-words ws-words-1">';//html to replace from
		var $t = $(this);
		var words = $t.html().split(settings.separator);
		var d = 0; //delay increased for each element
		var c = settings.delay * words.length; // total cycle of rotation
		$.each( words, function( k, v ) {
			value = $.trim(v);
		  //lert( k + ": " + v );
		  h+='<span style="-webkit-animation-delay: '+d+'s;-ms-animation-delay: '+d+'s; animation-delay: '+d+'s; -webkit-animation-duration: '+c+'s;">'+v+'</span>';
		  d+=settings.delay;
		});
		h+='</div>';
		$t.html(h);
		//lert(words);
		return this;
	});
};
}( jQuery ));

$( ".wordswitch" ).wordswitch(); // Makes all the links green.



