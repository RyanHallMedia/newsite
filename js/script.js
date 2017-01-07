$(document).ready(function(){
	var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'; //for getting the correct event

	// for animating nav
	var nav = $(".startnav");
	$(window).scroll(function() {
			var $height = $('header').height() - 65;
			var scroll = $(window).scrollTop();

			if (scroll >= $height) {
					nav.addClass("endnav");
			} else {
					nav.removeClass("endnav");
			}
	});



	//mobile nav
	$('.navbutton').on(hitEvent, function() {
	    $('nav').toggleClass('nav-open');
			$('.navbutton').toggleClass('nav-open');
			$('.startnav').toggleClass('nav-open');
	});
	//mobile nav
	$('.mobilenav li a').on(hitEvent, function() {
	    $('nav').toggleClass('nav-open');
			$('.navbutton').toggleClass('nav-open');
			$('.startnav').toggleClass('nav-open');
	});
	//closes mobile nav on escape key hit
	$(document).keyup(function(e) {

			if(e.keyCode=== 27) {
	        $('.navbutton.nav-open').click();
	    }
	});



  //sets animations on pageload
	setTimeout(function(){
    $('.body').addClass('animated fadeIn');
		$('.body').removeClass("preanimate");
	}, 100);
	setTimeout(function(){
    $('header .subheader').addClass('animated fadeIn');
		$('header .subheader').removeClass("preanimate");
	}, 300);
	setTimeout(function(){
		$('header h1').addClass('animated fadeIn');
		$('header h1').removeClass("preanimate");
	}, 400);
	setTimeout(function(){
		$('header h5').addClass('animated fadeIn');
		$('header h5').removeClass("preanimate");
	}, 800);
	setTimeout(function(){
		$('header .play').addClass('animated fadeIn');
		$('header .play').removeClass("preanimate");
	}, 1000);
	setTimeout(function(){
		$('nav').addClass('animated fadeInDown');
		$('nav').removeClass("preanimate");
	}, 1000);
	setTimeout(function(){
		$('header .scroll').addClass('animated fadeIn');
		$('header .scroll').removeClass("preanimate");
	}, 1600);

  //animations on scroll
  var appear = $(window).height() - 50;
  $(window).scroll(function() {
    $('.workgrid h2, .contact-from h2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow+appear) {
        $(this).addClass("fadeIn animated");
        $(this).removeClass("preanimate");
      } else {
        $(this).removeClass("fadeIn animated");
        $(this).addClass("preanimate");
      }
    });
  });

});
