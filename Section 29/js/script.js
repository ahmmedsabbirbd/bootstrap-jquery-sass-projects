$('documnet').ready(function() {


	/*/// init Isotope ///*/
	var $grid = $('.product-filter').isotope({
		itemSelector: '.item'
	});

	var filters = {};    /// store filter for each group

	$('.product-filter-button').on( 'click', '.button', function( event ) {
		var $button = $( event.currentTarget );
		var $buttonGroup = $button.parents('.filter-items');
		var filterGroup = $buttonGroup.attr('data-filter-group');
		filters[ filterGroup ] = $button.attr('data-filter');
		var filterValue = concatValues( filters );
		$grid.isotope({ filter: filterValue });
	});

	
	$('.filter-items').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );

		$buttonGroup.on( 'click', 'button', function( event ) {
		$buttonGroup.find('.active').removeClass('active');
			var $button = $( event.currentTarget );
			$button.addClass('active');
		});
	}); /// change is-checked class on buttons


	
	function concatValues( obj ) {
		var value = '';
		for ( var prop in obj ) {
		  value += obj[ prop ];
		}
		return value;
	}  // flatten object by concatting values

	/*/// magnific popup ///*/
	$('.product-gallery').magnificPopup({ 
		delegate: 'a',
	    type: 'image',
	    gallery:{
			enabled:true
		}
	});

	$('.product-gallery .product-item').each( function() { $(this).hoverdir(); } );

});