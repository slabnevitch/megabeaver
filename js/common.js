$(function() {

	$(document).ready(function(e) {
		$('aside .sidebar-menu').after('<div class="mobile-menu">')
			.clone().appendTo('.mobile-menu');
		// $('.mobile-menu').addClass('mobile-menu--hidden');
		$('.mobile-menu').find('ul.sf-menu').removeClass('sf-menu sf-js-enabled sf-vertical');
		
		$('ul.sf-menu').superfish({
			delay: 200,
			speed: 'fast',
			cssArrows: false

		});




		// Accordeon-----------------------------------
		$('.mobile-menu .chevron-left').click(function(e) {
			e.preventDefault();
			var $currentItem = $(this).closest('.acordeon-item');
			if($currentItem.hasClass('acordeon-item-with-sublist')){

				$currentItem.find('.acordeon-sublist')
				.stop(true, true)
				.slideToggle();
				$currentItem.siblings()
				.find('.acordeon-sublist')
				.stop(true, true)
				.slideUp();

			}else{
				return;
			}
		});
	// end Accordeon-----------------------------------

	    $(".toggle-mnu--mobile").click(function() {
	        $(this).toggleClass("on");
	        $(".mobile-menu").stop(true, true).slideToggle();
	        return false;
	    });

	    $(".toggle-mnu--desktop").click(function() {
	        $(this).toggleClass("on");
	       
	        $(".sf-menu").stop(true, true).slideToggle();
	        return false;
	    });

	    var $searchInp = $('.header-search__input');

	    $(document).mouseup(function(e) {
	    	if(!$searchInp.is(e.target) && $searchInp.has(e.target).length === 0 && e.target.className !== 'header-search__input'){
	    		$searchInp.fadeOut();
	    	}
	    });
	    $('.header-search__button').click(function(e) {
	    		$searchInp.fadeIn();
	    });

	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
