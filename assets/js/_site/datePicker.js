const $ = jQuery.noConflict();

'use strict';
const DatePicker = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {

		var picker = new Pikaday({ field: document.getElementById('datepicker') });
		var picker2 = new Pikaday({ field: document.getElementById('datepicker2') });
	}
};

export default DatePicker;