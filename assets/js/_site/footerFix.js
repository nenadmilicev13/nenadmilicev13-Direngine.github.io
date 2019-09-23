const $ = jQuery.noConflict();

'use strict';
const FooterFix = {

	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        $(window).scroll(function(){
            var footerHeight = $('.main-footer').innerHeight();
            $('.main-content').css('margin-bottom',  footerHeight + 'px');

            console.log(footerHeight);
        });
	}
};

export default FooterFix;