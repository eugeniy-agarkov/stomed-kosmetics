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

			this.nav()
			this.search()
			this.mobile_menu()
			this.advantages()
			this.reviews()
			this.tab_mobile()
			this.footer_menu()
			this.intro_column_swiper()
			this.collapse()
			this.mobile_panel()

		},

		/**
		 * Scroll Nav Fixed
		 */
		nav: function ()
		{

			let $container = $('.header__bottom'),
				offset = $container.offset().top

			$(window).scroll(function () {

				var scroll = $(window).scrollTop()

				if (scroll > offset)
				{
					$container.addClass('fixed')
				}else{
					$container.removeClass('fixed')
				}

			})

		},

		/**
		 * Footer Menu
		 */
		footer_menu: function ()
		{


			$(document).on('click', '.footerMenuMobile', function(e) {

				e.preventDefault();

				const $this = $(this)

				$this.parent().toggleClass('active')

			})

		},

		/**
		 * Tab Mobile
		 */
		tab_mobile: function ()
		{

			$(document).on('click', '.tab_mobile__link', function(e) {

				e.preventDefault();

				const 	$this = $(this),
						$content = $this.parent().find('.tab_mobile__content')

				$this.toggleClass('active')
				$content.toggleClass('active')
			})

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
				spaceBetween: 20,
				slidesPerView: 'auto',
				pagination: {
					el: '.swiperAdvantages .swiper-pagination',
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					1000: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					1400: {
						slidesPerView: 4,
						spaceBetween: 40,
					}
				}
			});

		},

		/**
		 * Mobile Menu
		 */
		mobile_menu: function ()
		{

			/**
			 * Open Menu
			 */
			$(document).on('click', '.mobileMenu', function(e) {

				e.preventDefault();

				$('body').toggleClass('menu__active')

			})

			/**
			 * Accordion Menu
			 */
			$(document).on('click', '.mobileMenuAccordionItem', function(e) {

				e.preventDefault();

				let $this = $(this)

				$this.parent().toggleClass('active')

			})

		},

		/**
		 * Reviews
		 */
		reviews: function()
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
		 * Intro Column Swiper
		 */
		intro_column_swiper: function ()
		{

			/**
			 * Thumb
			 */
			var introColumnSwiperThumb = new Swiper('.introColumnSwiperThumb', {
				loop: false,
				spaceBetween: 15,
				slidesPerView: 'auto',
				freeMode: true,
				watchSlidesProgress: true,
				direction: "vertical",
			})

			/**
			 * Big
			 */
			var introColumnSwiperBig = new Swiper(".introColumnSwiperBig", {
				loop: true,
				spaceBetween: 15,
				navigation: {
					nextEl: ".introColumnSwiperBig .swiper-button-next",
					prevEl: ".introColumnSwiperBig .swiper-button-prev",
				},
				pagination: {
					el: '.introColumnSwiperBig .swiper-pagination',
				},
				thumbs: {
					swiper: introColumnSwiperThumb,
				},
			})

		},

		/**
		 * Collapse
		 */
		collapse: function ()
		{

			/**
			 * Click
			 */
			$(document).on('click', '.buttonCollapse', function(e) {

				e.preventDefault()

				let $this = $(this),
					text_default = $this.data('text-collapse'),
					text_collapsed = $this.data('text-collapsed'),
					$content = $this.parent().parent().find('.textCollapse')

				if( $content.hasClass('active') )
				{

					$this.find('span').text(text_default)
					$this.parent().parent().find('.textCollapse').removeClass('active')
					$this.removeClass('active')

				}else{

					$this.find('span').text(text_collapsed)
					$this.parent().parent().find('.textCollapse').addClass('active')
					$this.addClass('active')

				}


			})

		},

		/**
		 * Mobile Panel
		 */
		mobile_panel: function ()
		{

			/**
			 * Open Search
			 */
			$(document).on('click', '.mobilePanelSearch', function(e) {

				e.preventDefault();

				$('.search_form').toggleClass('active')

			})

			/**
			 * Open Filter
			 */
			$(document).on('click', '.mobilePanelFilter', function(e) {

				e.preventDefault();

				$('.mobilePanelFilterContent').toggleClass('active')

			})


		}

	}

	Site.init()

});
