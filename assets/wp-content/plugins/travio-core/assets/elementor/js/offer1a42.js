(function ($) {

    "use strict";

    var offer_js = function ($scope, $) {

        // single-item-carousel
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                smartSpeed: 3000,
                autoplay: true,
                navText: ['<span class="icon-Left-Arrow"></span>', '<span class="icon-Right-Arrow"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }

                }
            });
        }

        //three-item-carousel
        if ($('.three-item-carousel').length) {
            $('.three-item-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 1000,
                autoplay: 500,
                navText: ['<span class="far fa-long-arrow-alt-left"></span>', '<span class="far fa-long-arrow-alt-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
            });
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/travio_offer.default', offer_js);
    });
})(window.jQuery);
