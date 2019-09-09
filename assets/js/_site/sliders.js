const $ = jQuery.noConflict();

'use strict';
const Sliders = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
		var cards = $('.js-slider-cards');
		var arrowLeft = $('.js-arrow-left');
		var arrowRight = $('.js-arrow-right');
		var testimonials = $('.js-testimonial');

		//cards slider 
		cards.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			nextArrow: arrowRight,
			prevArrow: arrowLeft,
			dots: true,
			infinite: false,
			// autoplay: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});

		//testimonials slider 
		testimonials.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			infinite: false,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}
};

export default Sliders;
