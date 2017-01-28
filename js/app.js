


$(document).ready( function() {
	// This grabs the submit for un-answered questions
	$('#input-form').submit( function(e){
		
		e.preventDefault();
		// zero out results if previous search has run
		// $('#search-data').html('');
		// get the value of the tags the user submitted
		var jobSearch = $('#search-data').val();
		//function call below
		
		// clears out input bar after search is run
		$('#search-data').val('');

		console.log(jobSearch);

	});
	
});
// **********END OF PROGRAM*********************************************
// *********************************************************************
