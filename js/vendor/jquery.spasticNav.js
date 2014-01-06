(function($) {
$.fn.spasticNav = function(options) {
		options = $.extend({
			overlap : 20,
			speed : 500,
			reset : 1500,
			easing : 'easeOutExpo'
		}, options);
	
		return this.each(function() {
		 	var nav = $(this),
		 		currentPageItem = $('.activeLink', nav),blob,reset;
		 	$('<span id="activeLinkBG"></span>').css({
		 		width :currentPageItem.outerWidth() + 20
		 		,height : '80px',
		 		left : currentPageItem.position().left,

		 	}).appendTo(this);
		 	
		 	blob = $('#activeLinkBG', nav);

$('li', nav).hover(function() {		
// mouse over
				clearTimeout(reset);
				blob.animate(
					{
						left : $(this).position().left,
						width : $(this).width() + 20
					},
					{
						duration : options.speed,
						easing : options.easing,
						queue : false
					}
				);

			}, function() {

				reset = setTimeout(function() {
					blob.animate({
						width : currentPageItem.outerWidth() + 20,
						left : currentPageItem.position().left
					}, options.speed)
				}, options.reset);
			});
		}); // end each
	};
})(jQuery);