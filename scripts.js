// JavaScript Document
$(document).ready(function() {
	$('.nava').click(function(e) {
		var linkTo = $(this).attr("href");
		//console.log(linkTo);
		
		$('html, body').animate({
			scrollTop: $(linkTo).offset().top
		}, 1000);
	});
	$(window).on('scroll', function() {
		var pixs = $(document).scrollTop();
		pixs /= 100;
		$("#landing").css({"-webkit-filter": "blur("+pixs+"px)", "filter": "blur("+pixs+"px)"});
	});
});

function toggleSituation() {
	document.getElementById("situation").classList.toggle('active');
	document.getElementById("landing").classList.toggle('active');
	document.getElementById("landingtext").classList.toggle('active');
	document.getElementById("main").classList.toggle('active');
	
	document.getElementById("menubutton").classList.toggle('active');
}

function toggleNav() {
	document.getElementById("header").classList.toggle('menuactive');
	document.getElementById("landing").classList.toggle('menuactive');
	document.getElementById("landingtext").classList.toggle('menuactive');
	document.getElementById("main").classList.toggle('menuactive');
	
	if (document.getElementById("situation").classList.contains("active"))
		{
			console.log("h1");
			document.getElementById("landingtext").classList.toggle("active2");
		}
	
}
