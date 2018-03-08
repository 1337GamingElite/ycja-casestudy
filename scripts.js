// JavaScript Document
$(document).ready(function () {
	$('.nava').click(function (e) {
		var linkTo = $(this).attr("href");
		//console.log(linkTo);

		$('html, body').animate({
			scrollTop: $(linkTo).offset().top
		}, 1000);
	});
	$(window).on('scroll', function () {
		var pixs = $(document).scrollTop();
        var scrollTop = $(window).scrollTop(),
            elementOffset = $("#conclusion").offset().top,
            distance = (elementOffset - scrollTop);
        console.log(distance);
        distance = (distance - 500) / 200;
		pixs /= 100;
		$("#landing").css({
			"-webkit-filter": "blur(" + pixs + "px)",
			"filter": "blur(" + pixs + "px)"
		});
        
        $("#conclusionlanding").css({
			"-webkit-filter": "blur(" + distance + "px)",
			"filter": "blur(" + distance + "px)"
		});
	});
});

function toggleSituation() {
	document.getElementById("situation").classList.toggle('active');
	document.getElementById("landing").classList.toggle('active');
	document.getElementById("landingtext").classList.toggle('active');
    document.getElementById("conclusionlandingtext").classList.toggle('active');
	document.getElementById("main").classList.toggle('active');
    document.getElementById("conclusion").classList.toggle('active');
	document.getElementById("menubutton").classList.toggle('active');
}

function toggleNav() {
	document.getElementById("header").classList.toggle('menuactive');
	document.getElementById("landing").classList.toggle('menuactive');
	document.getElementById("landingtext").classList.toggle('menuactive');
    document.getElementById("conclusionlandingtext").classList.toggle('menuactive');
    document.getElementById("conclusion").classList.toggle('menuactive');
	document.getElementById("main").classList.toggle('menuactive');

	if (document.getElementById("situation").classList.contains("active")) {
		//console.log("h1");
		document.getElementById("landingtext").classList.toggle("active2");
        document.getElementById("conclusionlandingtext").classList.toggle("active2");
	}

}

// Google Maps
function initMap() {
	var center = {
		lat: 53.537555,
		lng: -113.435714
	};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 18,
		center: center,
		mapTypeId: 'hybrid',
		disableDefaultUI: true,
	});

	var causeText = '<h3 class="maptext">The stoplight where it began</h3>';

	var causeWindow = new google.maps.InfoWindow({
		content: causeText
	});

	var cause = new google.maps.Marker({
		position: {
			lat: 53.537530,
			lng: -113.436883
		},
		map: map,
		title: 'Where the "street race" started',
		label: 'A'
	});

	cause.addListener('click', function () {
		causeWindow.open(map, cause);
	});

	var effectText = '<h3 class="maptext">The house that was damaged (now repaired)</h3>';

	var effectWindow = new google.maps.InfoWindow({
		content: effectText
	});

	var effect = new google.maps.Marker({
		position: {
			lat: 53.537850,
			lng: -113.435180
		},
		map: map,
		title: 'The house that was damaged',
		label: 'B'
	});

	effect.addListener('click', function () {
		effectWindow.open(map, effect);
	});
	
	var carText = '<h3 class="maptext">Where the car was found severely damaged</h3>';
	
	var carWindow = new google.maps.InfoWindow({
		content: carText
	});
	
	var car = new google.maps.Marker({
		position: {
			lat: 53.537730,
			lng: -113.434984
		},
		map: map,
		title: 'Where the car was found',
		label: 'C'
	});
	
	car.addListener('click', function () {
		carWindow.open(map, car);
	});
	
	var markers = [cause, effect, car];
	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < markers.length; i++)
		{
			bounds.extend(markers[i].getPosition());
		}
	map.fitBounds(bounds);
}