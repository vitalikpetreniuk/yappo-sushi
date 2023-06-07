var $ = jQuery;

$(function() {
// custom scripts
		
		//scroll up

		$(window).scroll(function() {
			var scrollTop = $(this).scrollTop();
			var lastScrollTop = $(this).data('lastScrollTop');


			
			
			if (scrollTop > lastScrollTop && scrollTop - lastScrollTop > 50) {
			  if ($("#menu").hasClass('overlay')) {
				
			  } else {
				$('.header-center').addClass('header-center-scroll');
				$(".btns-wrap-header-menu").removeClass('btns-wrap-header-menu-active');
				$('.burger-desck').removeClass('burger-active');
				

				$('.resault-block').css('top','8rem');
				
			  }

			} 
			
			else if (scrollTop < lastScrollTop && lastScrollTop - scrollTop > 10) {
			  $(".header-center").removeClass("header-center-scroll");
			  $('.resault-block').css('top','14rem');
			}
			
			$(this).data('lastScrollTop', scrollTop);
		});

	

		var previousScroll = 0;

		$(window).scroll(function() {
		  var currentScroll = $(this).scrollTop();
		  
		  if (currentScroll > 500) {
			$('.fix-cart').css('display', 'flex');
		  } else {
		
		  }
		  
		  if (currentScroll < 500) {
			$('.fix-cart').css('display', 'none'); 
		  }
		  
		  previousScroll = currentScroll;
		});

	//modal search

	$('.form-search-btn').on('click', function () {	
		var windowHeight = $(window).height();
		var headerHeight = $('.header').outerHeight();
		var footerHeight = $('.footer-modal').outerHeight();
	
		var pageHeight = windowHeight - headerHeight;

		$('.modal-search').css('min-height', pageHeight + 4 + 'px');
		$('.modal-search').css('padding-bottom', footerHeight + 230 + 'px');

		$('.modal-search').toggleClass('modal-search-active');
		$('main').toggleClass('for-main-overflow');


		
		if ($('.modal-search').hasClass('modal-search-active')) {
			$(".btn-open-search").css('display','none'),
			$(".close-open-search").css('display','block')
			$("html, body").animate({ scrollTop: 0 }, "slow");

		} else {
			$(".btn-open-search").css('display','block')
			$(".close-open-search").css('display','none')
			$('main').removeClass('for-main-overflow');
		}
	})



	//burger

	$('.burger').on('click', function () {	
		$('#menu').toggleClass('overlay');
		$('main').toggleClass('for-main-overflow');
		$("main").toggleClass('put-up')
		$(this).toggleClass('burger-active');

		if ($(this).hasClass('burger-active')) {
			$("footer").css('display','none')
		} else {
			$("footer").css('display','block')
		}
	})

	$('main').on('click', function () {	
		$(this).removeClass('put-up');
		$('main').removeClass('for-main-overflow');
		$('#menu').removeClass('overlay');
		$('.burger').removeClass('burger-active')
		$('.cart-modal').removeClass('cart-modal-active')
		$('body').removeClass('overflow');
		$('.fix-cart').css('opacity', '1');	
		$('body').css('padding-top', '201.5px');
		
		if( window.innerWidth >= 600){
			$('body').css('padding-top', '201.5px');
		}
		else{
			$('body').css('padding-top', '175.5px');
		}
	})






	//filter

	$('.filter-btn-open').on('click', function () {	
		$('.filter-options').addClass('filter-options-active');
		$('.filter-options').css('margin-bottom', '0')
		$('.filter-wrap').addClass('filter-wrap-active');
		$('.widget-btns').css("left", "-100%");
		$('.cheked-wrap').css("margin-top", "3rem");
	})


	$('.close-filter').on('click', function () {	
		$('.filter-options').removeClass('filter-options-active');
		$('.filter-wrap').removeClass('filter-wrap-active');
		$('.widget-btns').css("left", "0%");
		$('.filter-options').css('margin-bottom', '30px')

		if( window.innerWidth >= 600){
			$('.cheked-wrap').css("margin-top", "6rem");
		}
		else{
			$('.cheked-wrap').css("margin-top", "3rem");
		}
	})



	$('.filter__checkgroup-title input').on('change', function () {
		$(this).closest(".filter__checkgroup-title").toggleClass('label-active');
		// console.log('click')
	});



	$(".inp-regulation").click(function() {
        var input = $(this);
        var value = input.val();
        input.val("").val(value); 
    });




	//local in header

	$('.local-wrap').on('click', function (e) {	

		e.preventDefault();
		$(".city-list").toggleClass('city-list-active');
		$(".btns-wrap-header-menu").removeClass('btns-wrap-header-menu-active');
		$(".burger-desck").removeClass('burger-active');

		if ($(".city-list").hasClass('city-list-active')) {
			$('.local-wrap').css("background", "rgba(0, 0, 0, 0.2)");
			toggleCart()
		  } else {
			$('.local-wrap').css("background", "rgba(0, 0, 0, 0.0)");
		}
	})

	$(document).on('click', function(e) {
		if (!$(e.target).closest('.local-wrap').length) {
			$(".city-list").removeClass('city-list-active');
			$('.local-wrap').css("background", "rgba(0, 0, 0, 0.0)");
		}

		if (!$(e.target).closest('.btns-wrap-header-menu, .burger-desck').length) {
			$(".btns-wrap-header-menu").removeClass('btns-wrap-header-menu-active');
			$(".burger-desck").removeClass('burger-active');
		}

	});



	$('.burger-desck').on('click', function () {	
		$(this).toggleClass('burger-active');
		$(".btns-wrap-header-menu").toggleClass('btns-wrap-header-menu-active');

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
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
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
		"z-index": "0",
	});

	$(".no-product ").parent(".no-product-wrap").parent(" .product__item").find('.btn-primary').css({
		"display": "none",
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
		$('.widget-btns').remove();
	}

	if ($('.cart-page').length > 0) {
		$('.fix-cart').remove();
		
		// $('header').css('position', 'absolute');
		if( window.innerWidth >= 1025){
			$('main').css('overflow','initial');
		}
		else{
			$('main').css('overflow-x','hidden');
		}
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
	  
	var quantityInputs = document.querySelectorAll('.quantity-input');
	var increaseBtns = document.querySelectorAll('.plus');
	var decreaseBtns = document.querySelectorAll('.minus');
	
	increaseBtns.forEach(function(btn) {
	  btn.addEventListener('click', function() {
		var quantityInput = this.parentNode.querySelector('.quantity-input');
		var currentValue = parseInt(quantityInput.value);
		quantityInput.value = currentValue + 1;
	  });
	});
	
	decreaseBtns.forEach(function(btn) {
	  btn.addEventListener('click', function() {
		var quantityInput = this.parentNode.querySelector('.quantity-input');
		var currentValue = parseInt(quantityInput.value);
		if (currentValue > 1) {
		  quantityInput.value = currentValue - 1;
		}
	  });
	});
  




	  

	//select-custom


	$('.select-dropdown__button').on('click', function() {
		var dropdownList = $(this).siblings('.select-dropdown__list');
		
		$('.select-dropdown__list').not(dropdownList).removeClass('active');
		dropdownList.toggleClass('active');
	});
	
	$('.select-dropdown__list-item').on('click', function() {
		var itemValue = $(this).data('value');
		// console.log(itemValue);
		
		var parentDropdown = $(this).closest('.select-dropdown');
		var dropdownButton = parentDropdown.find('.select-dropdown__button span');
		
		dropdownButton.text($(this).text()).parent().attr('data-value', itemValue);
		
		$('.select-dropdown__list').removeClass('active');
	});


	$('.select-wrap').on('click', function() {
		$(".select-dropdown__list").toggleClass('active');
		$(".arrow-rotate").toggleClass('arrow-active-rotate');
	});


	

})




///product discription

$(document).ready(function() {

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


	// categories-business-lunch

	if (window.location.pathname === '/yappo-sushi/categories-business-lunch.html') {
		var image = document.querySelector('img[src="img/icons-in-top-menu/top-menu8.svg"]');
		image.src = 'img/icons-in-top-menu/top-menu8-orange.svg';

		var chatBubble = $(image).closest("сhat-bubbles p");
		chatBubble.css("color", "#f45905");
	  }

	  if (window.location.pathname === '/yappo-sushi/product-page.html') {
		var image = document.querySelector('img[src="img/icons-in-top-menu/top-menu1.svg"]');
		image.src = 'img/icons-in-top-menu/top-menu1-orange.svg';
		var chatBubble = $(image).closest("сhat-bubbles p");
  		chatBubble.css("color", "#f45905");
	  }


	//cart modal

	function toggleCart() {
		$('.cart-modal').toggleClass('cart-modal-active');
		$('body').toggleClass('overflow');
		$('.btns-wrap-header-menu').removeClass('btns-wrap-header-menu-active');
		$('.city-list').removeClass('city-list-active');

		if ($('.cart-modal').hasClass('cart-modal-active')) {
			$('.widget-btns').css("left", "-100%");
			$('#menu').removeClass("overlay");
			$('main').addClass('put-up');
			$('main').removeClass('for-main-overflow ');
			$('.header-center').addClass('header-center-scroll');
			$('.fix-cart').css('opacity', '0');

			setTimeout(()=>{
				var headerTopHeight = $('.header-top').outerHeight();
				var headerBottomHeight = $('.header-bottom').outerHeight();
			
				const headerHeight = Math.floor($("header").outerHeight());
				var resaulBottomHeight =$('.resaul-sum-wrap').outerHeight()
				const modatTitleHeight =$('.cart-title').outerHeight() 
				
				var cartModalHeight = $(window).height() - headerHeight
			
				const productListHeight = cartModalHeight - (resaulBottomHeight + modatTitleHeight)
				
			
				$('body').css('padding-top', headerHeight + 'px');
				$('.cart-modal').outerHeight(cartModalHeight + 4 + 'px');
				$('.cart-modal').css('top', headerHeight + -4 +'px');
			
				$('.cart-list').outerHeight(productListHeight - 50);
			},200)			
		
		} else {
			$('.widget-btns').css("left", "0");
			$('main').removeClass('put-up');
			$('.header-center').removeClass('header-center-scroll');	
		}	

	  }
	  
	  $('.fix-cart').on('click', toggleCart);
	  $('.cart-header').on('click', toggleCart);
	  $('.close-cart').on('click', toggleCart);

	  $('.local').on('click', function(){
			if ($(".cart-modal").hasClass('cart-modal-active')) {
				toggleCart()
			}
	  })


	//close- cart calback
	var observer = new MutationObserver(function(mutationsList) {
		for (var mutation of mutationsList) {

		if (!$(mutation.target).hasClass('cart-modal-active')) {
			$('.header-center').removeClass('header-center-scroll');
		}
		}
	});
	
	observer.observe($('.cart-modal')[0], { attributes: true, attributeFilter: ['class'] });


	//added-success

	$('.btn-primary').click(function() {
		$('.added-success').addClass('added-success-active');
		setTimeout(function() {
			 $('.added-success').removeClass('added-success-active');
		}, 4000);
	});

	$('.added-success .orange-btn').click(function() {
		toggleCart()
		$('.added-success').removeClass('added-success-active');
	});





	//we-got-success

	$('.resault-block .orange-btn').click(function(e) {
		e.preventDefault()
		$('.we-got-success').addClass('we-got-success-active');
		// $("html, body").animate({ scrollTop: 0 }, "slow");
		$('body').css('overflow', 'hidden');
		// setTimeout(function() {
		// 	 $('.we-got-success').removeClass('we-got-success-active');
		// 	 $('body').css('overflow', 'auto');
		// }, 3000);
	});

	$('.we-got-success').click(function() {
			$(this).removeClass('we-got-success-active');
			$('body').css('overflow', 'auto');
	});




	// togle for ask section

	const items = document.querySelectorAll(".accordion button");

	function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');

		for (i = 0; i < items.length; i++) {
			items[i].setAttribute('aria-expanded', 'false');
			$('.accordion-item, button').removeClass("accordion-item-active");
			
		}
		
		if (itemToggle == 'false') {
			this.setAttribute('aria-expanded', 'true');
			$(this).addClass("accordion-item-active")
			
		}
	}

	items.forEach(item => item.addEventListener('click', toggleAccordion));




});


$(window).on('load resize', function() {



  // height $('.page-404')
  function setPageHeight() {
    var windowHeight = $(window).height();
    var headerHeight = $('.header').outerHeight();
    var footerHeight = $('.footer').outerHeight();

    var pageHeight = windowHeight - headerHeight - footerHeight;
    $('.page-404').css('min-height', pageHeight + 'px');
  }

  setPageHeight(); 

  $(window).resize(setPageHeight);



});





