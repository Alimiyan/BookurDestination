(function ($) { 

    "use strict";
    var progress_bar_circle = function ($scope, $) {
        function expertizeRoundCircle () {
            var rounderContainer = $('.piechart');
            if (rounderContainer.length) {
                rounderContainer.each(function () {
                    var Self = $(this);
                    var value = Self.data('value');
                    var size = Self.parent().width();
                    var color = Self.data('fg-color');
        
                    Self.find('span').each(function () {
                        var expertCount = $(this);
                        expertCount.appear(function () {
                            expertCount.countTo({
                                from: 1,
                                to: value*100,
                                speed: 3000
                            });
                        });
        
                    });
                    Self.appear(function () {					
                        Self.circleProgress({
                            value: value,
                            size: 120,
                            thickness: 4,
                            emptyFill: '#f5f0f0',
                            animation: {
                                duration: 3000
                            },
                            fill: {
                                color: color
                            }
                        });
                    });
                });
            };
        }
        expertizeRoundCircle ();  
        
    }
    

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/resox_about_two.default', progress_bar_circle);
    });
})(window.jQuery);