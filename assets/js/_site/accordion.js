const $ = jQuery.noConflict();

'use strict';
const Accordion = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        var accordionItem = $('.js-accordion-item');
        var accordionItemContent = $('.js-accordion__item-content');
        var accordionItemText = $('.js-accordion__item-text');

        accordionItem.on('click',function(){
            var $this = $(this);
            var currentContent = $this.find(accordionItemContent);
            var currentText = $this.find(accordionItemText);

            currentContent.slideToggle();
            currentText.toggleClass('open');
            // accordionItemContent.not(currentContent).slideUp();
            
        });

	}
};

export default Accordion;