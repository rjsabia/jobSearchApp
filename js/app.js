$(document).ready( function() {
  // This grabs the submit for un-answered questions
  $('#input-form').submit( function(e){
    
    e.preventDefault();
    // zero out results if previous search has run
    // $('#search-data').html('');
    // get the value of the tags the user submitted
    var jobSearch = $('#search-data').val();
    var location = $('#search-location').val();
    //function call below
    getJobs(jobSearch,location);
    // clears out input bar after search is run
    $('#search-data').val('');

    console.log(jobSearch);

  });
  
});

var getJobs = function(job_title,loc) {
 
  var request = { 
    description: job_title,
    location: loc,
    full_time: true
  };
  
  $.ajax({
    url: "http://jobs.github.com/positions.json?",
    data: request,
    dataType: "jsonp",//use jsonp to avoid cross origin issues
    type: "GET"
  })
  .done(function(result){ //this waits for the ajax to return with a succesful promise object
    
   // var searchResults = showSearchResults(request.tagged, result.items.length);

    console.log(result);

    $.each(result, function(key,value){
      console.log(value);
      $('#output-container').html(value.company);
    })

    

   // $('.search-results').html(searchResults);
   
 });
}


// **********END OF PROGRAM*********************************************
// *********************************************************************