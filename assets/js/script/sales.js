jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Sales
	 * @type {{init: Sales.init, install: Sales.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Sales = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.relevant()
			this.timer()

		},

		/**
		 * Relevant
		 */
		relevant: function ()
		{

			const swiperSalesLast = new Swiper('.swiperSalesLast .swiper', {
				loop: false,
				speed: 400,
				spaceBetween: 20,
				slidesPerView: 1,
				pagination: {
					el: '.swiperSalesLast .swiper-pagination',
				},
				navigation: {
					nextEl: '.swiperSalesLast .swiper-button-next',
					prevEl: '.swiperSalesLast .swiper-button-prev',
				},
				breakpoints: {
					998: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1399: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				}
			});

		},

		/**
		 * Timer
		 */
		timer: function ()
		{

			if( $('.timer').length )
			{

				$('.timer').each(function (index, value) {

					let $this = $(this),
						time = $this.data('time'),
						id = 'timer-' + index

					$this.attr('id', id)

					console.dir(time)

					$('#' + id).countdown(time, function(event) {
						var $this = $(this).html(event.strftime(''
							+ '<span>%D</span> <small>д.</small> '
							+ '<span>%H</span> <small>ч.</small> '
							+ '<span>%M</span> <small>м.</small> '
							+ '<span>%S</span> <small>с.</small>'));
					});

				});

			}

		},


	}

	Sales.init()

});
