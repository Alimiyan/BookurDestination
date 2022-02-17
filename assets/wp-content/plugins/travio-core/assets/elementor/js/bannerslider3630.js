(function ($) {

    "use strict";

    var banner_js = function ($scope, $) {

        // banner-carousel

        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 6000,
                navText: ['<span class="icon-Left-Arrow"></span>', '<span class="icon-Right-Arrow"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    }
                }
            });
        }

    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/travio_banner.default', banner_js);
    });
})(window.jQuery);