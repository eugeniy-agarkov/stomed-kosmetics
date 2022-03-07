jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Reviews
	 * @type {{init: Reviews.init, install: Reviews.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Reviews = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.slider()
			this.collapse()

		},

		/**
		 * Slider
		 */
		slider: function()
		{

			/**
			 * Slider
			 */
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

		/**
		 * Collapse
		 */
		collapse: function ()
		{


			/**
			 * Collapse Open
			 */
			$(document).on('click', '.reviewsCollapseLink', function(e)
			{

				e.preventDefault()

				let $this = $(this),
					$container = $this.parent().find('.reviewsCollapse'),
					text_collapse = $this.data('text-collapse'),
					text_collapsed = $this.data('text-collapsed')

				$this.toggleClass('active')
				$container.toggleClass('active')

				if( $this.hasClass('active') )
				{

					$this.text(text_collapsed)

				}else{

					$this.text(text_collapse)

				}

			})

		},

	}

	Reviews.init()

});
