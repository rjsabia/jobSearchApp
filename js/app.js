$(document).ready( function() {
  // This grabs the submit for un-answered questions
  $('#input-form').submit( function(e){
    e.preventDefault();
    // get the value of the tags the user submitted
    var jobSearch = $('#job-title').val();
    var location = $('#search-location').val();
    //function call below
    getJobs(jobSearch,location);
    // clears out input bar and output after search is run
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
    markdown: true
  };
  $.ajax({
    url: "http://jobs.github.com/positions.json?",
    data: request,
    dataType: "jsonp",//use jsonp to avoid cross origin issues
    type: "GET"
  })
  //waits for the ajax to return a successful promise object
  .done(function(result){ 
    console.log(result);
    $.each(result, function(key,value){
    // output function call
    outputJobs(value);
    console.log(value.company);
    })
 });
}
function outputJobs (comp){
  $('#output-list').append('<li id="results-li"><ul><li id="each-li"><a href="'
    // company url link anchor tied to clickable company logo
    +comp.company_url+'"target="_blank"><img src="'+comp.company_logo+'"alt="'
    // alternate output if company logo not available
    +comp.company+'"width="200" height="75"/></a>'+'</li><li id="each-li">'
    // output job type i.e. FT/PT/Other, output title is the job listing title
    +comp.type+'</li><li id="each-li">'+comp.title+'</li><li id="each-li">'
    // location outputs the city and or state job is located, created_at is date of post
    +comp.location+'</li><li id="each-li">'+'<p>'+"Job Posted On: "+comp.created_at+
    '</li><li id="each-li">'+'<p>'+ "How to apply: "
    // how to apply lists company instruction, url is link to Github job posting
    +comp.how_to_apply+'</p></li><li><a href="'+comp.url+'"target="_blank">'
    +"Link to Job Post and Description"+'</a></li></li></ul></li>');
}
// **********END OF PROGRAM*********************************
// *********************************************************