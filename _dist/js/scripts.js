var $ = jQuery;

$(function() {
// custom scripts


	$("body").css("padding-top", $(".header").outerHeight()  + "px");	
	
	//scroll header

	$(window).on("scroll",function() {
		var height = $(window).scrollTop();		

		if(height > 0){			
			$('.header').addClass('header-fixed');
			$('.header-center').addClass('header-center-scroll');
			
				
		} else{				
			$('.header').removeClass('header-fixed');	
			$('.header-center').removeClass('header-center-scroll');		
		}
	});




	$(window).on("scroll resize", function() {
		var height = $(window).scrollTop();
		var headerHeight = $('.header').outerHeight();
	
		if (height > 0) {
			$('.header').addClass('header-fixed');

		} else {
			$('.header').removeClass('header-fixed');
		}
	
		$("body").css("padding-top", headerHeight + 34 + "px");
	});





	//burger

	$('.burger').on('click', function () {	
		$('#menu').toggleClass('overlay');
		$('body').toggleClass('overflow');
		$("main").toggleClass('put-up')
		$(this).toggleClass('burger-active');

	})

	$('main').on('click', function () {	
		$(this).removeClass('put-up');
		$('body').removeClass('overflow');
		$('#menu').removeClass('overlay');
		$('.burger').removeClass('burger-active')
	})


	//search
	$('.form-search-btn').on('click', function () {	
		$('.search-wrap').toggleClass('search-wrap-active');
	})

	$('.close-search').on('click', function () {	
		$('.search-wrap').removeClass('search-wrap-active');
	})


	//local in header

	$('.local-wrap').on('click', function (e) {	
		e.preventDefault();
		$(".city-list").toggleClass('city-list-active');

		if ($(".city-list").hasClass('city-list-active')) {
			$('.local-wrap').css("background", "rgba(0, 0, 0, 0.2)");
		  } else {
			$('.local-wrap').css("background", "rgba(0, 0, 0, 0.0)");
		  }

	})

	$(document).on('click', function(e) {
		if (!$(e.target).closest('.local-wrap').length) {
			$(".city-list").removeClass('city-list-active');
			$('.local-wrap').css("background", "rgba(0, 0, 0, 0.0)");
		}
	});





	///custom-select-language descctop

	$('.lang-desctop').on('click', function (e) {	
		e.preventDefault();
		$(this).toggleClass('lang-desctop-active');

	})

	$('.lang-list a').on('click', function (e) {	
		e.preventDefault();
		const lang = $(this).data("lang");
		$(".lang-desctop-wrap a").removeClass("active");
		$(`.lang-desctop-wrap a[data-lang="${lang}"]`).addClass("active");

		$(".lang-list a").removeClass("active");
		$(`.lang-list a[data-lang="${lang}"]`).addClass("active");
	})



	//hover for svg

	$('.hover-effect-svg').hover(function() {
		$(this).find('[fill="#2A1A5E"]').attr('fill', '#736998');
		$(this).find('[stroke="#2A1A5E"]').attr('stroke', '#736998');
	}, function() {
		$(this).find('[fill="#736998"]').attr('fill', '#2A1A5E');
		$(this).find('[stroke="#736998"]').attr('stroke', '#2A1A5E');
	});




	// top-slider

	if($('.swiper').length) {

		new Swiper('.banner-slider', {

			slidesPerView: 1.2,
			spaceBetween: 40,
			centeredSlides: true,
			loop: true,
			simulateTouch: true,
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// },
			speed: 1000,
			autoplay: {
				delay: 5000,
				stopOnLastSlide: true,
				disableOnInteraction: false,
			},
			breakpoints: {
				425: {
					// spaceBetween: 50,
				},
				550: {
					spaceBetween: 100,
					slidesPerView: 1.4,
				},
				768: {
					spaceBetween: 150,
					slidesPerView: 1.6,
				},
				1024: {
					spaceBetween: 250,
					slidesPerView: 1.8,
				},
				1700: {
					spaceBetween: 400,
					slidesPerView: 2,
				},
			},
		})
	}

	

	//products sale-badges

	$(".discount-sale").parent(".product__item").css({
		"border": "1px solid rgba(244, 89, 5, 0.4)",
		"box-shadow": "0px 4px 15px 0px rgba(0, 0, 0, 0)"
	});

	$(".new-sale").parent(".product__item").css({
		"border": "1px solid rgba(42, 26, 94, 0.4)",
		"box-shadow": "0px 4px 15px 0px rgba(0, 0, 0, 0)"
	});





})


$(document).ready(function() {
	var descriptionElement = $('.product-description');
	var descriptionText = descriptionElement.text();


	var lineHeight = parseFloat(descriptionElement.css('line-height'));
	var maxHeight = lineHeight * 1; 

	if (descriptionElement.height() > maxHeight) {
	  while (descriptionElement.height() > maxHeight) {
		descriptionText = descriptionText.slice(0, -1);
		descriptionElement.text(descriptionText + '...');
	  }
	}
  });