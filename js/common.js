$(document).ready(function() {

	//my personal loader! fell free to use it tho
	$(window).load(function() { 
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
		setTimeout(function () {
			$(".parent").css( "display", "none" );
			$(".main-content").animate({'opacity': '1'}, 1500);
		}, 4500);
		setTimeout(function () {
			$(".parent").animate({'opacity': '0'}, 1500);
		}, 3500);
	});

	//hide all my sections for sure
	$(".homesect").hide();

	//simple need for non-scrolling main page if it more than original in sections
	//u can see the "main" script after the "document-ready" funct.
	$(".cbp-spmenu").css("display", "none");
	$(".cbp-spmenu").css("opacity", "0");
	
	//mobile screen saver for usability
	if(window.screen.width > 800) {
		//script for the 4 main colored button-wrappers
		setTimeout(function () {
			$('.item-wrap').on('mouseenter', function() {
				$(this).find('.item').animate({'opacity': '1'}, 50);
			});
			$('.item-wrap').on('mouseleave', function() {
				$(this).find('.item').animate({'opacity': '0'}, 50);
			});
			setTimeout(function () {
				$('.button8').on('click', function() {
					$(".item-wrap").find('.item').animate({'opacity': '0'}, 50);
				});
			}, 5000);
		}, 0000);
	} else { //on mobile items are always visible 
		setTimeout( function() {
			$(".item-wrap").find('.item').animate({'opacity': '1'}, 200);
		}, 5000);
	}

	//ajax part ResidentSleeper
	$('.simple-ajax-popup-align-top').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.simple-ajax-popup').magnificPopup({
		type: 'ajax'
	});

	//SVG Fallback ResidentSleeper
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//i just need it for sometimes ResidentSleeper
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
		//your er msg 
	};

});
//SO here we are -- the main script 
//first get the my variables. i use classie plugin tho
var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
menuRight = document.getElementById( 'cbp-spmenu-s2' ),
menuLeft1 = document.getElementById( 'cbp-spmenu-s3' ),
menuRight1 = document.getElementById( 'cbp-spmenu-s4' ),
showLeft = document.getElementById( 'showLeft' ),
closeLeft = document.getElementById( 'closeLeft' ),
showLeft1 = document.getElementById( 'showLeft1' ),
closeLeft1 = document.getElementById( 'closeLeft1' ),
showRight = document.getElementById( 'showRight' ),
closeRight = document.getElementById( 'closeRight' ),
showRight1 = document.getElementById( 'showRight1' ),
closeRight1 = document.getElementById( 'closeRight1' ),
body = document.body;

//so the 1 of 4 scripts on click the button.
//------------------------------------------
showLeft.onclick = function() {
	//open
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );

	//cant open other sections by script on the bottom disableOther
	disableOther( 'showLeft' );

	//some css and animate on open. and animation is important
	$(".homesect").css("display","block");
	$(".spmenu1").css("display", "block");
	$(".spmenu1").animate({'opacity': '1'}, 200);
};

//close button for left sliders
closeLeft.onclick = function() {
	//close
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
	//disable closebuttons tho!
	disableOther( 'closeLeft' );
};

//css&animate for close
$("#closeLeft").on("click", function() {
	$(".menuLeft").toggle();
	setTimeout(function () {
		$(".homesect").css("display","none");
		$(".spmenu1").css("display", "none");
		$(".spmenu1").animate({'opacity': '0'}, 0);
	}, 200);
	setTimeout(function () {
		$(".homesect").hide();
	}, 200);
});
//script end!
//----------------------------------------


//all another acrions
showLeft1.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft1, 'cbp-spmenu-open' );
	disableOther( 'showLeft1' );
	$(".homesect").css("display","block");
	$(".spmenu3").css("display", "block");
	$(".spmenu3").animate({'opacity': '1'}, 200);
	
};
closeLeft1.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft1, 'cbp-spmenu-open' );
	disableOther( 'closeLeft1' );

};
$("#closeLeft1").on("click", function() {
	$(".menuLeft1").toggle();
	setTimeout(function () {
		$(".homesect").css("display","none");
		$(".spmenu3").css("display", "none");
		$(".spmenu3").animate({'opacity': '0'}, 0);
	}, 200);
	setTimeout(function () {
		$(".homesect").hide();
	}, 200);
});
showRight1.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight1, 'cbp-spmenu-open' );
	disableOther( 'showRight1' );
	$(".homesect").css("display","block");
	$(".spmenu4").css("display", "block");
	$(".spmenu4").animate({'opacity': '1'}, 200);
	
};
closeRight1.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight1, 'cbp-spmenu-open' );
	disableOther( 'closeRight1' );

};
$("#closeRight1").on("click", function() {
	$(".menuRight1").toggle();
	setTimeout(function () {
		$(".homesect").css("display","none");
		$(".spmenu4").css("display", "none");
		$(".spmenu4").animate({'opacity': '0'}, 0);
	}, 200);
	setTimeout(function () {
		$(".homesect").hide();
	}, 200);
});
showRight.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRight' );
	$(".homesect").css("display","block");
	$(".spmenu2").css("display", "block");
	$(".spmenu2").animate({'opacity': '1'}, 200);
	
};
closeRight.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'closeRight' );

};
$("#closeRight").on("click", function() {
	$(".menuRight").toggle();
	setTimeout(function () {
		$(".homesect").css("display","none");
		$(".spmenu2").css("display", "none");
		$(".spmenu2").animate({'opacity': '0'}, 0);
	}, 200);
	setTimeout(function () {
		$(".homesect").hide();
	}, 200);
});


//disable other script
function disableOther( button ) {
	if( button !== 'showLeft' ) {
		classie.toggle( showLeft, 'disabled' );
	}
	if( button !== 'closeLeft' ) {
		classie.toggle( closeLeft, 'disabled' );
	}
	if( button !== 'showLeft1' ) {
		classie.toggle( showLeft1, 'disabled' );
	}
	if( button !== 'closeLeft1' ) {
		classie.toggle( closeLeft1, 'disabled' );
	}
	if( button !== 'showRight' ) {
		classie.toggle( showRight, 'disabled' );
	}
	if( button !== 'closeRight' ) {
		classie.toggle( closeRight, 'disabled' );
	}
	if( button !== 'showRight1' ) {
		classie.toggle( showRight1, 'disabled' );
	}
	if( button !== 'closeRight1' ) {
		classie.toggle( closeRight1, 'disabled' );
	}
}


//classie plugin part ResidentSleeper
( function( window ) {

	'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
	return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
	hasClass = function( elem, c ) {
		return elem.classList.contains( c );
	};
	addClass = function( elem, c ) {
		elem.classList.add( c );
	};
	removeClass = function( elem, c ) {
		elem.classList.remove( c );
	};
}
else {
	hasClass = function( elem, c ) {
		return classReg( c ).test( elem.className );
	};
	addClass = function( elem, c ) {
		if ( !hasClass( elem, c ) ) {
			elem.className = elem.className + ' ' + c;
		}
	};
	removeClass = function( elem, c ) {
		elem.className = elem.className.replace( classReg( c ), ' ' );
	};
}

function toggleClass( elem, c ) {
	var fn = hasClass( elem, c ) ? removeClass : addClass;
	fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );

//ouh.. hi?