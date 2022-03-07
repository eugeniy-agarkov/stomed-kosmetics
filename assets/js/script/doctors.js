jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Doctors
	 * @type {{init: Doctors.init, install: Doctors.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Doctors = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.grid_order()
			this.sertificates()

		},

		/**
		 * Grid Order
		 */
		grid_order: function ()
		{

			/**
			 * Date
			 */
			$( '.doctorOrderDate' ).datepicker()
			$( '.doctorOrderDate' ).datepicker( 'option', 'dateFormat', 'dd.mm.yy' )
			$( '.doctorOrderDate' ).datepicker( 'setDate', new Date() )


			/**
			 * Locations Open
			 */
			$(document).on('click', '.doctorOrderLocation', function(e) {

				e.preventDefault()

				let $this = $(this)

				$this.parent().find('.doctorOrderLocationList').toggleClass('active')

			})

			/**
			 * Locations Set
			 */
			$(document).on('click', '.doctorOrderLocationList a', function(e) {

				e.preventDefault()

				let $this = $(this)

				$this.parent().parent().parent().find('.doctorOrderLocation').val($this.text())

				$this.parent().parent().toggleClass('active')

			})

			/**
			 * Time
			 */
			$(document).on('click', '.doctorOrderTimeDrop a', function(e) {

				e.preventDefault()

				let $this = $(this)

				$this.parent().toggleClass('active')

				$this.parent().parent().find('.hidden').toggleClass('active')

			})

			/**
			 * Item Click
			 */
			$(document).on('click', '.doctorOrderTimeItem', function(e) {

				e.preventDefault()

				let $this = $(this)

				$this.parent().parent().find('.doctorOrderTimeItem').removeClass('active')

				$this.addClass('active')

				$this.parent().parent().parent().parent().parent().find('[name="time"]').val($this.text())

			})




		},

		/**
		 * Sertificates
		 */
		sertificates: function()
		{

			const swiperLastSert = new Swiper('.swiperLastSert .swiper', {
				loop: true,
				speed: 400,
				spaceBetween: 20,
				slidesPerView: 2,
				pagination: {
					el: '.swiperLastSert .swiper-pagination',
				},
				navigation: {
					nextEl: ".swiperLastSert .swiper-button-next",
					prevEl: ".swiperLastSert .swiper-button-prev",
				},
				breakpoints: {
					499: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					1400: {
						slidesPerView: 4,
						spaceBetween: 40,
					}
				}
			});

		},





	}

	Doctors.init()

});
