
import Sliders from './_site/sliders';
import HeaderSticky from './_site/headerSticky';
import Tabs from './_site/tabs';
import Accordion from './_site/accordion';
import DatePicker from './_site/datePicker';
import RangeSlider from './_site/rangeSlider';
import NavBtn from './_site/navBtn';
import FooterFix from './_site/footerFix';

jQuery(function () {
	// Slick Slider
	Sliders.init();

	// headerSticky
	HeaderSticky.init();

	// Tabs
	Tabs.init();

	// Accordion
	Accordion.init();

	// DatePicker
	DatePicker.init();

	// RangeSlider
	RangeSlider.init();

	// NavBtn
	NavBtn.init();

	// FooterFix
	FooterFix.init();

	console.log('hello');
});
