$(document).ready(function() {
	
	// MAKE ABOUT SECTION SLIDE TO TOP
	$('#logo').click(function (z){
		z.preventDefault();
		$('html,body').animate({scrollTop:$('#header-lower').offset().top - 60}, 600);
	});
	
	// MAKE ABOUT SECTION SLIDE TO TOP
	$('#what').click(function (a){
		a.preventDefault();
		$('html,body').animate({scrollTop:$('#about').offset().top - 60}, 600);
	});
	
	// MAKE WES SECTION SLIDE TO TOP
	$('#design').click(function (b){
		b.preventDefault();
		$('html,body').animate({scrollTop:$('#wes').offset().top - 60}, 600);
	});
	
	// MAKE STEVE SECTION SLIDE TO TOP
	$('#development').click(function (c){
		c.preventDefault();
		$('html,body').animate({scrollTop:$('#steve').offset().top - 60}, 600);
	});
	
	// MAKE WES SECTION SLIDE TO TOP
	$('#contact').click(function (d){
		d.preventDefault();
		$('html,body').animate({scrollTop:$('#footer').offset().top - 60}, 600);
	});
	
});