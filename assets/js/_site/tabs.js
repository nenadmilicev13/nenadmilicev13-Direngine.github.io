const $ = jQuery.noConflict();

'use strict';
const Tabs = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        
        var tabLink = $('.js-tab-info');
        var tabContent = $('.js-tab-content');
        var currentTabClass = 'current';
       
        tabLink.on('click', function() {
            var tabId = $(this).attr('data-tab');

            tabLink.removeClass(currentTabClass);
            tabContent.removeClass(currentTabClass);
    
            $(this).addClass(currentTabClass);
            $("#" + tabId).addClass(currentTabClass);
        });
	}
};

export default Tabs;