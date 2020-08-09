//select Box
$(document).ready(function(){
	$('.inputbox').find('select').each(function() {
		var self = $(this),
			parentBox = self.parents('.inputbox'),
			change = function() {
				$(this).prev('.txt').text($(this).find('option:selected').text());
			},
			focusin = function() {
				$(this).parents('.inputbox').addClass('selected');
			},
			focusout = function() {
				$(this).parents('.inputbox').removeClass('selected');
			};

		self.css({
			'width' : parentBox.width() + 2 + 'px',
			'height' : parentBox.height() + 'px'
		}).on({
			'change' : change,
			'focusin' : focusin,
			'focusout' : focusout
		});
	}).end().find('.txt').each(function(){
		var self = $(this);
		self.text(self.next('select').find('option:selected').text());
	});
});


//banner
$(function(){
  $('.banner').flexslider({
	animation: "slide",
	directionNav: true,
	controlNav: false,
	direction:"horizontal"
  });
});


//allmenu
$(function(){
	$(".allmenu").hide();
	$(".btn_open_allmenu").click(function(){
		$(".btn_open_allmenu img").attr('src','images/main/icon_menu_on.png');
		$(".allmenu").show();
	});	
	
	$(".btn_close").click(function(){
		$(".btn_open_allmenu img").attr('src','images/main/icon_menu.png');
		$(".allmenu").hide();
	});
});