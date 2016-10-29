function main(){
	var here = window.location.href;
	
	// if (here.indexOf('#') > -1){
	// 	var id = here.slice(here.indexOf('#'));
	// 	$('.active').removeClass('active');
	// 	$('.here').removeClass('here');
	// 	$(id).addClass('active');
	// 	var navItems = $('li a');
	// 	for (var x = 0; x < navItems.length; x++){
	// 		if (navItems[x].hash === id){
	// 			navItems[x].setAttribute('class', 'here');
	// 		}
	// 	}
	// };

	$('li a').click(function(){
		var id = this.className;
		$('.active').removeClass('active');
		$('.here').removeClass('here');
		$('#'+id).addClass('active');
		$(this).addClass('here');
		$('.navbar-collapse').removeClass('in');
	});

	// $('.moreInfo').click(function(){
	// 	$('#extended').css({'display':'block'});
	// });

	$('#extended').click(function(){
		$(this).css({'display':'none'});
	});

	$('#extended i').click(function(){
		$('#extended').css({'display':'none'});
	});

	$('#moreInfo').click(function(e){
		e.stopPropagation();
	});
};

function initMap() {
	var office,
		map,
		marker,
		info,
		infoIsOpen = true;

	office = {lat: 39.9616317, lng: -75.2575662},
	map = new google.maps.Map(document.getElementById('map'), {
		center: office,
		mapTypeControl: false,
		scrollwheel: false,
		streetViewControl: false,
		zoom: 15,
	});
	marker = new google.maps.Marker({
		map: map,
		position: office,
		title: '6800 Market Street, Philadelphia, PA'
	});
	info = new google.maps.InfoWindow({
	    content:'<p class="map-label">Unlimited Vision:</br>Windell Murphy, MD</p>'
	});
	map.setOptions({
		draggable: false,
	})
	map.addListener('click', function() {
	    window.open("https://www.google.com/maps/dir//Unlimited+Vision:+Murphy+Windell+H+A+MD,+6800+Market+St,+Upper+Darby,+PA+19082/@39.961668,-75.2575529,15z/data=!4m16!1m7!3m6!1s0x0:0xc7ab74d10598c731!2sUnlimited+Vision:+Murphy+Windell+H+A+MD!3b1!8m2!3d39.961668!4d-75.2575529!4m7!1m0!1m5!1m1!1s0x89c6c12fda40d7a3:0xc7ab74d10598c731!2m2!1d-75.2575529!2d39.961668")
	});
	marker.addListener('click', function() {
		if (infoIsOpen) {
			info.close(map, marker);
			infoIsOpen = false;
		}
		else {
			info.open(map, marker);
			infoIsOpen = true;
		}
	});
	info.open(map, marker);
}

$(document).ready(main);