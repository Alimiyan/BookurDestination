(function ($) { 

    "use strict";

    var three_item_carosel = function ($scope, $) {
        
      //three-item-carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1000,
			autoplay: 500,
			navText: [ '<span class="far fa-long-arrow-alt-left"></span>', '<span class="far fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}

    }
    

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/travio_testimonial.default', three_item_carosel);
    });
})(window.jQuery);