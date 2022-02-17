(function ($) { 

    "use strict";

    var team_js = function ($scope, $) {
        
        if ($('.four-item-carousel').length) {
            $('.four-item-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                smartSpeed: 500,
                autoplay: 1000,
                navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    800:{
                        items:3
                    },
                    1024:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });    		
        }
    }
    

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/resox_team_slider.default', team_js);
    });
})(window.jQuery);