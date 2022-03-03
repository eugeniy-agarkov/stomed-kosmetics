jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Site
	 * @type {{init: Site.init, install: Site.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Site = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.search()
			this.advantages()
			this.reviews()

		},

		/**
		 * Search Mobile
		 */
		search: function()
		{

			$(document).on('click', '.searchMobile', function(e) {

				e.preventDefault();

				$('.searchMobileForm').toggleClass('active')
			})

		},

		/**
		 * Advantages
		 */
		advantages: function()
		{

			const swiperAdvantages = new Swiper('.swiperAdvantages', {
				loop: true,
				speed: 400,
				spaceBetween: 15,
				slidesPerView: 1,
				pagination: {
					el: '.swiperAdvantages .swiper-pagination',
				},
				breakpoints: {
					1000: {
						slidesPerView: 4,
					},
					1400: {
						slidesPerView: 4,
						spaceBetween: 40,
					}
				}
			});

		},

		/**
		 * Reviews
		 */
		reviews: function()
		{

			const swiperReviews = new Swiper('.swiperReviews', {
				loop: false,
				speed: 300,
				spaceBetween: 30,
				slidesPerView: 1,
				autoHeight: true,
				pagination: {
					el: '.swiperReviews .swiper-pagination',
					type: 'fraction',
				},
				navigation: {
					nextEl: '.swiperReviews .swiper-button-next',
					prevEl: '.swiperReviews .swiper-button-prev',
				},
			});

		},


	}

	Site.init()

	/******************************************************************
	 * Home
	 * @type {{init: Home.init, install: Home.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Home = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.install  = this.install( this )


		},

		/**
		 * Install
		 */
		install: function()
		{

			/**
			 * Intro
			 */
			$( document ).on(
				'click',
				'.homeIntroPoint',
				this.intro )

		},

		/**
		 * Intro Section
		 */
		intro: function(e)
		{

			e.preventDefault()

			let $this = $(this)

			$this.parent().toggleClass('active')


		},


	}

	Home.init()

});
