const $ = jQuery.noConflict();

'use strict';
const HeaderSticky = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        var mainHeader = $('.js-main-header');

		$(window).on("scroll", function() {
            if($(window).scrollTop() > 400) {
                $(mainHeader).addClass("header-sticky");
            } else {
               
               $(mainHeader).removeClass("header-sticky");
            }
        });
	}
};

export default HeaderSticky;