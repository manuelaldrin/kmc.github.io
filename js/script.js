( function($) {

	var app =  {

		init: function(){
			this.scrollFunction();
			this.featpropFunction();
			this.chainHeightFunction();
			this.fixedNavFunction();
			this.magnificPopUpFunction();
			this.modalFunction();
			this.modalLinksFunction();
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		},

		scrollFunction: function(){
			$('.featprop-link a').click(function(){ 
				$("html, body").animate({ 
					scrollTop: $('#featprop-id').offset().top 
				}, "slow"); 
			})

			$('.arrows').click(function(){ 
				$("html, body").animate({ 
					scrollTop: $('#about-id').offset().top 
				}, "slow"); 
			})

			// ===== Scroll to Top ==== 
			$(window).scroll(function() {
			    if ($(this).scrollTop() > 150) {        
			        $('#return-to-top').fadeIn(200);   
			    } else {
			        $('#return-to-top').fadeOut(200);  
			    }
			});
			$('#return-to-top').click(function() {     
			    $('body,html').animate({
			        scrollTop : 0       
			    }, 500);
			});
		},

		featpropFunction: function(){

			 // Slick for FP Details
	        $('.featprop-details-holder').slick({
	            infinite: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: true,
	            autoplay: true,
	            autoplaySpeed: 5000,
	            dots: false,
	            appendArrows: $('.featprop-details-nav'),
	            prevArrow: '<div class="slick-prev fp-arrows"></div>',
	            nextArrow: '<div class="slick-next fp-arrows"></div>',
	            asNavFor: '.featprop-photo-holder'
	        });
	        // Slick for FP Image
	        $('.featprop-photo-holder').slick({
	            infinite: true, 
	            slidesToShow: 1, 
	            slidesToScroll: 1, 
	            arrows: false, 
	            autoplay: true, 
	            autoplaySpeed: 5000, 
	            dots: false, 
	            asNavFor: '.featprop-details-holder'
	        });

		},

		chainHeightFunction: function(){
			setTimeout(function(){
				var largestHeight = 0;
				$('.chain-height-about').each(function(){ 
					if ($(this).outerHeight() > largestHeight){
		             	largestHeight = $(this).outerHeight();
		             	console.log(largestHeight);
		            }
				})
				$('.about-photo').height(largestHeight);
			},10)

			setTimeout(function(){
				var largestHeight = 0;
				$('.chain-height-contact').each(function(){ 
					if ($(this).outerHeight() > largestHeight){
		             	largestHeight = $(this).outerHeight();
		             	console.log(largestHeight);
		            }
				})
				$('.contact-photo').height(largestHeight);
			},10)
		},

		fixedNavFunction: function(){

			$(window).scroll(function () {
	            var scroll = $(window).scrollTop();
                if (scroll > 200) {
                    $('.fixed-menu').addClass('open-menu');
                } else {
                    $('.fixed-menu').removeClass('open-menu');
                }
	        });

			$('.fixed-menu').click(function(){
				$('.fixed-menu').toggleClass('menu-click');
				$('.fixed-nav-wrap').toggleClass('menu-visible');
				$('body').toggleClass('overflow-body');
			})
			
		},

		featpropFunction: function(){

			 // Slick for FP Details
	        $('.featpropmain-holder').slick({
	            infinite: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: true,
	            autoplay: true,
	            autoplaySpeed: 7000,
	            dots: false,
	            appendArrows: $('.featpropmain-nav'),
	            prevArrow: '<div class="slick-prev fp-arrows far fa-arrow-alt-circle-left"></div>',
	            nextArrow: '<div class="slick-next fp-arrows far fa-arrow-alt-circle-right"></div>'
	        });

		},

		modalFunction: function(){
			$('.services-col-wrap').click(function(){
				setTimeout(function(){
					$('.modal-backdrop').detach().prependTo('.modal');	
				},10);
			});

			$('.modal-header button, .modal-footer button').click(function(){
				$('.modal-backdrop').remove();
			});
		},

		modalLinksFunction: function(){

			$('.modal-readmore-link').click(function() {
				$('.p-hide').slideToggle( "fast", function() {
					if($('.p-hide').is(':visible')){
						$('.modal-readmore-link').text('Read Less');
					} else {
						$('.modal-readmore-link').text('Read More');
					}
					
				});
				
			});

			$('.modal-contact-link').click(function() {
				var indexPath = window.location.origin+window.location.pathname;;
				var contactID = $('.contact-wrap').attr('id');
				window.location.href = indexPath + '#' + contactID;
				$('.modal-backdrop').remove();
			});

		}



	} 

	$(document).ready( function() {
		app.init();
	});

	$(window).load(function () { 
		
	});

	$(window).resize(function () { 
		app.chainHeightFunction();
	});
	
})(jQuery);