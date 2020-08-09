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




$(function(){
  $('li.depth > a').click(function(){
	$('.depth_wrap').toggle();
	if( $(this).parent().hasClass("off") ){
		$(this).parent().removeClass("off").addClass("on");
	}else {
		$(this).parent().removeClass("on").addClass("off");
	}
  });
});


$(function(){
  $('li.depth_02 > a').click(function(){
	$('.depth_wrap_02').toggle();
	if( $(this).parent().hasClass("off") ){
		$(this).parent().removeClass("off").addClass("on");
	}else {
		$(this).parent().removeClass("on").addClass("off");
	}
  });
});


//Q&A
$(document).ready(function(){
	$("dl.question").click(function(){
		var detail = $(this).next(".answer");
		if( detail.is(":visible") ){
			$(this).removeClass("on");
			detail.slideToggle();
		}else{
			$(this).addClass("on");
			detail.slideToggle();
		}
	});
});


