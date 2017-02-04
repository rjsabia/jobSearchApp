$(document).ready( function() {
  // This grabs the submit for un-answered questions
  $('#input-form').submit( function(e){
    e.preventDefault();
    // zero out results if previous search has run
    // $('#search-data').html('');
    // get the value of the tags the user submitted
    var jobSearch = $('#job-title').val();
    var location = $('#search-location').val();
    //function call below
    getJobs(jobSearch,location);
    // clears out input bar after search is run
    $('#job-title').val('');
    $('#search-location').val('');
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
  //waits for the ajax to return a succesful promise object
  .done(function(result){ 
    console.log(result);
    $.each(result, function(key,value){
    // output function
    outputJobs(value);
    console.log(value.company);
    // $('#output-container').html(value.company);
    })
 });
}
function outputJobs (comp){
  // $('#output-list').append('<li>'+comp.company+'</li>');
  $('#output-list').append('<li><ul><li>'+'<img src="'+comp.company_logo+'">'+'</li><li>'+comp.company_url+'</li><li>'+comp.description+'</li><li>'+comp.title+'</li><li>'+comp.location+'</li><li>'+comp.how_to_apply+'</li></ul></li>');
}
// **********END OF PROGRAM*********************************
// *********************************************************