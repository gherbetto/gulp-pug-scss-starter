function mainSlider(){
	const slider = document.querySelector('.main-slider__items')
	$(slider)?.slick({
		infinite: true,
		speed: 200,
		slidesToShow: 1,
		dots: true,
		appendDots: '.main-slider__dots',
		arrows: false,
		waitForAnimate: true,
		focusOnSelect: true,
		fade: true,
		LazyLoad: 'ondemand',
	});
}

export default mainSlider;