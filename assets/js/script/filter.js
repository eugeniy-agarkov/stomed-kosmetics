jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Filter
	 * @type {{init: Filter.init, install: Filter.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Filter = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.slider()
			this.order()

		},

		/**
		 * Slider
		 */
		slider: function ()
		{

			var stepsSlider = document.getElementById('steps-slider');
			var input0 = document.getElementById('input-with-keypress-0');
			var input1 = document.getElementById('input-with-keypress-1');
			var inputs = [input0, input1];

			noUiSlider.create(stepsSlider, {
				start: [0, 100000],
				range: {
					'min': [0],
					'max': [100000]
				},
				connect: true,
				tooltips: false,
				format: {
					to: function (value) {
						return Math.round(value) + ' руб.';
					},
					from: function (value) {
						return value.replace(' руб.', '');
					}
				}
			});

			stepsSlider.noUiSlider.on('update', function (values, handle) {
				inputs[handle].value = values[handle];
			});

		},

		/**
		 * Order
		 */
		order: function ()
		{

			$(document).on('click', '.orderLink', function(e) {

				e.preventDefault();

				const $this = $(this)

				$this.parent().find('.orderSelect').toggleClass('active')

			})

		},

	}

	Filter.init()


});
