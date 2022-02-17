$(function(){
  
    $('.circlechart').circlechart();

  });
// isotope plugin js activation code.
var $grid = $('.grid').isotope({
	// set itemSelector so .grid-sizer is not used in layout
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
	  // use element for option
	  columnWidth:'.grid-sizer'
	}
  })

  
  // filter items on button click
  $('.gallary-area').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });
		
 $('.blog-content').isotope({
	// set itemSelector so .grid-sizer is not used in layout
	itemSelector: '.blog-single',
	percentPosition: true,
	masonry: {
	  // use element for option
	  columnWidth:'.blog-sizer'
	}
  })
  //Parallaxie ON contact section
  $('.parallaxie').parallaxie();


 // Initialize and add the map
 function initMap() {
	// The location of Uluru
	const uluru = { lat: -25.344, lng: 131.036 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 4,
	  center: uluru,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
	  position: uluru,
	  map: map,
	});
  }
