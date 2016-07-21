		$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 300) {
					$('.top').fadeIn(300);
				} else {
					$('.top').fadeOut(300);
				}
			});
			
			// Animate the scroll to top
			$('.top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});