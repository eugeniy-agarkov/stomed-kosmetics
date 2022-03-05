jQuery( function( $ ) {

	'use strict';

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
