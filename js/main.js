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
		$('#nav li a').css('color','#000');
		$(this).find('a').css('color','#fff');
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
				//When Resiting to the currentpage item which takes .activeLink class
			}, function() {

				 reset = setTimeout(function() {
				 	$('#nav li a').css('color','#000');
				 	blob.animate({
				 		width : currentPageItem.outerWidth() + 20,
				 		left : currentPageItem.position().left
				 	}, options.speed)

			currentPageItem.find('a').css('color','#fff');
				 }, options.reset);
			
			});
		}); // end each
	};
})(jQuery);
$('#nav').spasticNav();