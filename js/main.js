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
		 	// if((currentPageItem.position().left)==($('#activeLinkBG').position().left))

		 	// {
		 	// currentPageItem.find('a').css('color','red');}
		 	blob = $('#activeLinkBG', nav);
	$('li', nav).hover(function() {	
		$('#nav li a').css('color','#000');
		$(this).find('a').css('color','#fff');

		// if($(this).position().left !==$('#activeLinkBG').position().left){$(this).find('a').css('color','#fff')}
		// 	else{$(this).find('a').css('color','#000')}
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





// $("#nav li").each(function(){
//  if($(this).position().left ==$('#activeLinkBG').position().left){$(this).css('background','red')};
// 	$(this).hover(function(){$(this).find('a').css('color','#fff')});
// 	$(this).mouseout(function(){$(this).find('a').css('color','#000')});
// });




// var listItems = $("#nav li");
// var ActiveBG = $('#activeLinkBG').position().left;



// //$('#nav li').hover(function(){
//  listItems.each(function(li) {
//  	switch($(this).position().left)
//  	{
//  case ActiveBG:
//  $(this).find('a').css('color','#fff !important');
//  }

// // 	if($(this).position().left==$('#activeLinkBG').position().left)
// // 	{
// // alert('d');
// //  };
//  //    if(($(this).position().left)==($('#activeLinkBG').position().left))
// 	// {$(this).find('a').css('color','#fff')}
//  });
// });



// $.when( $('#nav li').hover() ).then(function( data, textStatus, jqXHR ) {
// alert( jqXHR.status ); // Alerts 200
// });

// var ul = $("#nav");
// var items = ul.getElementsByTagName("li");
// for (var i = 0; i < items.length; ++i) {
// 	//if((i.position().left)==($('activeLinkBG').position().left)){alert(i)}
//   console.log(i)// do something with items[i], which is a <li> element
// }
