function main(){
	var here = window.location.href;
	
	if (here.indexOf('#') > -1){
		var id = here.slice(here.indexOf('#'));
		$('.active').removeClass('active');
		$('.here').removeClass('here');
		$(id).addClass('active');
		var navItems = $('li a');
		for (var x = 0; x < navItems.length; x++){
			if (navItems[x].hash === id){
				navItems[x].setAttribute('class', 'here');
			}
		}
	};

	$('li a').click(function(){
		var id = this.attributes[0].nodeValue;
		$('.active').removeClass('active');
		$('.here').removeClass('here');
		$(id).addClass('active');
		$(this).addClass('here');
	});
	
	$('.moreInfo').click(function(){
		$('#extended').css({'display':'block'});
	});

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

$(document).ready(main);