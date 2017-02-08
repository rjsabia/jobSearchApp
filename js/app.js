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
    $('#output-list').empty();
    console.log(jobSearch);
  });
});
var getJobs = function(job_title,loc) {
  var request = { 
    description: job_title,
    location: loc,
    // full_time: true,
    markdown: true
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
    })
 });
}
function outputJobs (comp){
  $('#output-list').append('<li><ul><li><a href="'+comp.company_url+
    '"target="_blank"><img src="'+comp.company_logo+'"alt="'+comp.company+
    '"width="200" height="75"/></a>'+'</li><li>'+comp.type+'</li><li>'
    +comp.title+'</li><li>'+comp.location+'</li><li>'+'<p>'+ "How to apply: "
    +comp.how_to_apply+'</p></li><li><a href="'+comp.url+'"target="_blank">'
    +"Link to Job Post and Description"+'</a></li></li></ul></li>');
}
// **********END OF PROGRAM*********************************
// *********************************************************