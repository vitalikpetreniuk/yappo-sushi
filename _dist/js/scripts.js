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

	$('.filter__checkgroup-title input').on('change', function () {
		$(this).closest(".filter__checkgroup-title").toggleClass('label-active');
		console.log('click')
	});




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



	//menu-page //hover for svg

	$('.menu-item').hover(function() {
		$(this, ".hover-effect-menu-page").find('[fill="#2A1A5E"]').attr('fill', '#FF671D');
		$(this, ".hover-effect-menu-page").find('[stroke="#2A1A5E"]').attr('stroke', '#FF671D');
	}, function() {
		$(this, ".hover-effect-menu-page").find('[fill="#FF671D"]').attr('fill', '#2A1A5E');
		$(this, ".hover-effect-menu-page").find('[stroke="#FF671D"]').attr('stroke', '#2A1A5E');
	});


	//contacts //hover for svg

	$('.contacts a').hover(function() {
		$(this, ".hover-effect-svg-local").find('[fill="#2A1A5E"]').attr('fill', '#736998');
		$(this, ".hover-effect-svg-local").find('[stroke="#2A1A5E"]').attr('stroke', '#736998');
	}, function() {
		$(this, ".hover-effect-svg-local").find('[fill="#736998"]').attr('fill', '#2A1A5E');
		$(this, ".hover-effect-svg-local").find('[stroke="#736998"]').attr('stroke', '#2A1A5E');
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

	if ($('.page-404,.contacts,.about-us,.privacy-policy,.return-policy,.public-offer').length > 0) {
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
	////




	  // click  on header menu
	  var originalPaths = [];
	  var selectedElement = null;
	  
	  $('.link-category .image-category').each(function() {
		originalPaths.push($(this).attr('src'));
	  });
	  
	  $('.link-category').click(function() {
		var index = $('.link-category').index(this);
		var currentPath = $(this).find('.image-category').attr('src');
	  
		if (selectedElement !== null) {
		  var previousPath = $(selectedElement).find('.image-category').attr('src');
		  $(selectedElement).find('.image-category').attr('src', previousPath.replace('-orange.svg', '.svg'));
		}
	  
		if (currentPath === originalPaths[index]) {
		  $(this).find('.image-category').attr('src', originalPaths[index].replace('.svg', '-orange.svg'));
		  selectedElement = this;
		} else {
		  selectedElement = null;
		  $(this).find('.image-category').attr('src', originalPaths[index]);
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



	  

	//select-custom


	// $('.select-dropdown__button').on('click', function(){
	// 	$(this).siblings('.select-dropdown__list').toggleClass('active');
	// });
	
	// $('.select-dropdown__list-item').on('click', function(){
	// 	var itemValue = $(this).data('value');
	// 	console.log(itemValue);
	// 	var parentDropdown = $(this).closest('.select-dropdown');
	// 	parentDropdown.find('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
	// 	parentDropdown.find('.select-dropdown__list').toggleClass('active');
	// });

	$('.select-dropdown__button').on('click', function() {
		var dropdownList = $(this).siblings('.select-dropdown__list');
		
		$('.select-dropdown__list').not(dropdownList).removeClass('active');
		dropdownList.toggleClass('active');
	});
	
	$('.select-dropdown__list-item').on('click', function() {
		var itemValue = $(this).data('value');
		console.log(itemValue);
		
		var parentDropdown = $(this).closest('.select-dropdown');
		var dropdownButton = parentDropdown.find('.select-dropdown__button span');
		
		dropdownButton.text($(this).text()).parent().attr('data-value', itemValue);
		
		$('.select-dropdown__list').removeClass('active');
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
});