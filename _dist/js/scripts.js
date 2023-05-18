var $ = jQuery;

$(function() {
// custom scripts
		
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




	// $(window).on("scroll resize", function() {
	// 	var height = $(window).scrollTop();
	// 	var headerHeight = $('.header').outerHeight();
	
	// 	if (height > 0) {
	// 		$('.header').addClass('header-fixed');

	// 	} else {
	// 		$('.header').removeClass('header-fixed');
	// 	}
	
	// });





	//burger

	$('.burger').on('click', function () {	
		$('#menu').toggleClass('overlay');
		$('main').toggleClass('overflow');
		$("main").toggleClass('put-up')
		$(this).toggleClass('burger-active');

	})

	$('main').on('click', function () {	
		$(this).removeClass('put-up');
		$('main').removeClass('overflow');
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



	//filter

	$('.filter-btn-open').on('click', function () {	
		$('.filter-options').addClass('filter-options-active');
		$('.filter-wrap').addClass('filter-wrap-active');
	})

	$('.close-filter').on('click', function () {	
		$('.filter-options').removeClass('filter-options-active');
		$('.filter-wrap').removeClass('filter-wrap-active');
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

	



	//scroll up

	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		var lastScrollTop = $(this).data('lastScrollTop');
	  
		if (scrollTop > lastScrollTop) {

		  $(".header-center").addClass("header-center-scroll");
		} else {

		  $(".header-center").removeClass("header-center-scroll");
		}
	  
		$(this).data('lastScrollTop', scrollTop);
	});





	//products sale-badges

	$(".discount-sale").parent(".sale-bage-wrap").parent(".product__item").css({
		"border": "1px solid rgba(244, 89, 5, 0.4)",
		"box-shadow": "0px 4px 15px 0px rgba(0, 0, 0, 0)"
	});

	$(".new-sale").parent(".sale-bage-wrap").parent(".product__item").css({
		"border": "1px solid rgba(42, 26, 94, 0.4)",
		"box-shadow": "0px 4px 15px 0px rgba(0, 0, 0, 0)"
	});

	$(".no-product ").parent(".no-product-wrap").parent(" .product__item").css({
		"pointer-events": "none",
		"z-index": "0"
	});

	



	//discount-card

	$(".product__item").each(function() {
		if ($(this).find(".discount-sale").length > 0) {
		  $(this).find(".product__cart__info").addClass("product__cart__info-discount");
		}
	});





	//click in page-404

	$('.cursor-pointer').click(function() {
		window.location.href = 'https://vitalikpetreniuk.github.io/yappo-sushi/';
	});

	if ($('.page-404').length > 0) {
		$('.fix-cart').remove();
	}



	//при посадці стерти,це тестове
	var miniCartCount = $(".mini-cart-count");
    miniCartCount.text("+");

	$(".btn-primary").click(function(e) {
		e.preventDefault();
		var miniCartCount = $(".mini-cart-count");
		var randomNumber = Math.floor(Math.random() * 99) + 1;
		miniCartCount.text(randomNumber);
	});

	$(".btn-primary").click(function(e) {
		e.preventDefault();
		var miniCartCount = $(".mini-cart-count");
		var count = parseInt(miniCartCount.text());
		
		if (count > 0) {
			$(".speech").addClass("speech-active");
		} else {
			$(".speech").removeClass("speech-active");
		}
	});



	//quantity-input
	  
	  $('.plus').click(function() {
		var input = $('#quantity-input');
		var value = parseInt(input.val());
		input.val(value + 1);
	  });
	
	  
	  $('.minus').click(function() {
		var input = $('#quantity-input');
		var value = parseInt(input.val());
		if (value > 1) {
		  input.val(value - 1);
		}
	  });



})




///product discription

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



	//height page-404

	// window.addEventListener('resize', adjustContentHeight);

	// function adjustContentHeight() {
	// 	var headerHeight = document.querySelector('header').offsetHeight;
	// 	var footerHeight = document.querySelector('footer').offsetHeight;
	// 	var content = document.querySelector('page-404');
	// 	var windowHeight = window.innerHeight;
	// 	var contentHeight = windowHeight - headerHeight - footerHeight;

	// 	content.style.minHeight = contentHeight + 'px';
	// }

	// window.addEventListener('load', adjustContentHeight);




});