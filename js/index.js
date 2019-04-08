$(function(){
	function initBox() {
		$('.banner-box').css({height:w_height-$mtoph});
		$('.banner .item').css({height:w_height-$mtoph});
		setImgMax($('.banner .pic2'),1920,892,w_width,w_height-$mtoph);
    };
    initBox();
    $(window).resize(function () {
        initBox();
    });
	$('.banner').slick({
		slide:".item",
	  	autoplay: true,	
	  	arrows: false,
	   	dots:true,
	   	infinite: true,
	   	easing:"easeInOutExpo",
	   	speed: 1000,
	   	autoplaySpeed: 5000,
	  	pauseOnHover: false,
	   	fade: true,
	   	draggable:false,
	   	touchMove:false
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.banner-line .line').css({width:0}).stop().animate({width:100+'%'},5800,'linear');
	});
	$('.banner-line .line').css({width:0}).stop().animate({width:100+'%'},4800,'linear');
	
	function gotoPro(item,address){
		$.ajax({
			url: address,
			dataType: "html",
			success: function (data) {
				if (data == "" || data == null) {
					return;
				}
				else {
					if($('.pro-list').size()!=0){ $('.pro-list').remove(); }
					$('.ipt-nav').after(data);
					$('.ipt-nav li').removeClass('act');
					item.addClass('act');
					$('.scoamt').scrollClass();
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				$('.pro-list').remove();
			}
		});
	};
	gotoPro($('.ipt-nav li').eq(0), $('.ipt-nav li').eq(0).attr("chref"));
	$('.ipt-nav li').click(function(e){
		e.preventDefault();
		var $this = $(this);
		gotoPro($this, $this.attr("chref"));	
	});
})