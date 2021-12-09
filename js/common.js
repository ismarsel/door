$(document).ready(function() {
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".top_mnu ul a").mPageScroll2id();

	$(".features").animated("fadeInUp", "fadeOutDown");

	$(".wp").waypoint(function() {
		$(".goods .goods_item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("goods_item__off").addClass("goods_item__on");
			}, 150*index);
		});
	}, {
		offset : "20%"
	});

	$(".slider").owlCarousel({
		items : 1,
		autoplay : true,
		loop : true,
		nav : true
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h2").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".top_text h3").animated("fadeInUp", "fadeOutDown");

}); 