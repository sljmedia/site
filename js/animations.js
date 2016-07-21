/* trigger css animations */
if (Modernizr.cssanimations)
{
	jQuery(window).load(function()
	{
		jQuery('body').imagesLoaded(function()
		{	
			jQuery('.animatein').each(function() 
			{
				var $this = jQuery(this),
					offs = '75%',
					aclass = $this.data('animation');
				
				if ($this.data('wpoffset')) { offs = $this.data('wpoffset'); }
				
				$this.waypoint(function() { $this.addClass('animate ' + aclass); }, {offset: offs});
			});
	
			jQuery('.animateover').each(function() 
			{
				var $this = jQuery(this),
					$target = $this.find('.animatetarget'),
					aclass = $target.data('animation'),
					offs = '75%';
							
				if ($this.data('wpoffset')) { offs = $this.data('wpoffset'); }
	
				if (!Modernizr.touch) { $this.hover(function() { $target.addClass('animate ' + aclass); }, function() { $target.removeClass('animate ' + aclass); }); }
				else { $this.waypoint(function() { $target.addClass('animate ' + aclass); }, {offset: offs}); }
			});
		});
	});
}