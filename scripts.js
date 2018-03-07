// JavaScript Document
$(document).ready(function() {
	$('.nava').click(function(e) {
		var linkTo = $(this).attr("href");
		//console.log(linkTo);
		
		$('html, body').animate({
			scrollTop: $(linkTo).offset().top
		}, 1000);
	});
});

function toggleSituation() {
	document.getElementById("situation").classList.toggle('active');
	document.getElementById("main").classList.toggle('active');
}