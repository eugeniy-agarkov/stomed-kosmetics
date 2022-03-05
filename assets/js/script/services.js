jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Services
	 * @type {{init: Services.init, install: Services.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Services = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.relevant()

		},

		/**
		 * Relevant
		 */
		relevant: function ()
		{

			const swiperServicesRelevant = new Swiper('.swiperServicesRelevant .swiper', {
				loop: true,
				speed: 400,
				spaceBetween: 20,
				slidesPerView: 1,
				pagination: {
					el: '.swiperServicesRelevant .swiper-pagination',
				},
				navigation: {
					nextEl: '.swiperServicesRelevant .swiper-button-next',
					prevEl: '.swiperServicesRelevant .swiper-button-prev',
				},
				breakpoints: {
					780: {
						slidesPerView: 2,
						spaceBetween: 25,
					},
					1399: {
						slidesPerView: 3,
						spaceBetween: 25,
					},
				}
			});

		},

	}

	Services.init()

});
