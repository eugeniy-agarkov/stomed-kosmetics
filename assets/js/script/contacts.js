jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Contacts
	 * @type {{init: Contacts.init, install: Contacts.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Contacts = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.accordion()
			this.gallery()

		},

		/**
		 * Accordion
		 */
		accordion: function ()
		{


			/**
			 * Accordion Open
			 */
			$(document).on('click', '.accordionLink', function(e)
			{

				e.preventDefault()

				let $this = $(this),
					$li = $this.parent()

				if( $li.hasClass('active') )
				{

					$li.removeClass('active')

				}else{

					$('.accordion').find('.active').removeClass('active')
					$li.addClass('active')

				}

			})

		},

		/**
		 * Gallery
		 */
		gallery: function ()
		{

			var swiperContactsGallery = new Swiper(".swiperContactsGallery .swiper", {
				loop: true,
				spaceBetween: 15,
				slidesPerView: 1,
				navigation: {
					nextEl: ".swiperContactsGallery .swiper-button-next",
					prevEl: ".swiperContactsGallery .swiper-button-prev",
				},
				pagination: {
					el: '.swiperContactsGallery .swiper-pagination',
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1000: {
						slidesPerView: 3,
						spaceBetween: 35,
					},
				}
			})

		},

	}

	Contacts.init()

});
