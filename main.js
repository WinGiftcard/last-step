$(document).ready(function() {	
	se = 1;
	if (se == 1) {
		sp = "a/";
		ion.sound({		
			sounds: [
				{
					name: "b1",
					path: sp,
					volume: 1
				},
				{
					name: "b2",
					path: sp,
					volume: 1
				},
				{
					name: "a1",
					path: sp,
					volume: 1
				},
				{
					name: "a2",
					path: sp,
					volume: 1
				},
				{
					name: "c2",
					path: sp,
					volume: 1
				},
				{
					name: "s1",
					path: sp,
					volume: 1
				},
				{
					name: "s2",
					path: sp,
					volume: 1
				},
				{
					name: "c1",
					path: sp,				
					volume: 1,
					loop: true
				}
			],
			path: sp,
			preload: true,
			multiplay: true
		});
	}
	if($('#particles-w').length){
		particlesJS.load('particles-w', 'js/particlesjs-config.json');
	}  
	if($('#search-bar-form').length){
		$('#search-bar-form').on('keyup keypress', function(e) {
			var keyCode = e.keyCode || e.which;
			if (keyCode === 13) { 
				e.preventDefault();
				return false;
			}
		});
		$("#search-bar-input").keyup(function(){
			if ($(this).val() == '') {
				$('.featured-wrapper').fadeIn();
			}
			else {
				$('.featured-wrapper').fadeOut();
			}
			var search_input = $(this).val();
			$(".search-result-wrapper .grid-column-wrapper").each(function(){
				if ($(this).text().search(new RegExp(search_input, "i")) < 0) {
					$(this).fadeOut();
				} else {
					$(this).show();
				}
			});
		});
	}
});