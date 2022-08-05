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
             * Select Date
             */
            $(document).on('change', '.doctorOrderDate', function(e)
            {

                let $this = $(this),
                    doctor = $this.data('doctor'),
                    $form = $('#slot-doctor-' + doctor),
                    url = $form.data('slot-url'),
                    clinic = $form.find('input[name="clinic"]').val()

                getSlots(url, clinic, $this.val(), doctor)

            })

            /**
             * Get Slots
             * @param url
             * @param clinic
             * @param date
             * @param doctor
             */
            function getSlots(url, clinic, date, doctor, is_clinic = false)
            {

                let $form = $('#slot-doctor-' + doctor)

                $.ajax( {
                    beforeSend  :   function(xhr){
                        $form.addClass('loader')
                    },
                    data        :   {
                        'clinic': clinic,
                        'date'  : date,
                    },
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    method      :   'GET',
                    complete    :   function(){
                        $form.removeClass('loader')
                    },
                    error: function(response) {

                    },
                    success     :   function( response )
                    {

                        if( is_clinic )
                        {
                            console.dir(response)
                            $form.find('.doctorOrderDateAjax').html(response.dates).promise().done(function(){

                                $.ajax( {
                                    beforeSend  :   function(xhr){
                                        $form.addClass('loader')
                                    },
                                    data        :   {
                                        'clinic': clinic,
                                        'date'  : $form.find('.doctorOrderDate').val(),
                                    },
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    method      :   'GET',
                                    complete    :   function(){
                                        $form.removeClass('loader')
                                    },
                                    success     :   function( response )
                                    {

                                        $form.find('.ajaxSlots').html(response.html)

                                    },
                                    url         :   url
                                } );

                            });
                        }else {

                            $form.find('.ajaxSlots').html(response.html)

                        }

                    },
                    url         :   url
                } );
            }

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

				let $this = $(this),
                    doctor = $this.data('doctor'),
                    $form = $('#slot-doctor-' + doctor),
                    $clinic = $form.find('input[name="clinic"]'),
                    url = $form.data('slot-url'),
                    date = $form.find('.doctorOrderDate').val(),
                    $inputLocation = $form.find('.doctorOrderLocation')


                $clinic.val($this.data('clinic'));
                $inputLocation.val($this.text())

				$this.parent().parent().toggleClass('active')

                getSlots(url, $clinic.val(), date, doctor, true);

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

				$this.parent().parent().parent().parent().parent().parent().find('[name="time"]').val($this.text())

			})

		},

		/**
		 * Sertificates
		 */
		sertificates: function()
		{


			const swiperLastSert = new Swiper('.swiperLastSert .swiper', {
				loop: false,
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
