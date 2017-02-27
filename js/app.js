$(document).ready( function() {
  // set hero as refresh link
  reset(); 
  // This grabs the submit for un-answered questions
  $('#input-form').submit( function(e){
    e.preventDefault();
    // get the value of the tags the user submitted
    var jobSearch = $('#job-title').val();
    var location = $('#search-location').val();
    //function call for Github API
    getJobs(jobSearch,location);
    // clears out input bar and output after search is run
    $('#job-title').val('');
    $('#search-location').val('');
    $('#output-list').empty();
    // Hides story explain
    $('#explain').hide();
  });
});
var getJobs = function(job_title,loc) {
  var request = { 
    description: job_title,
    location: loc,
  };
  $.ajax({
    url: "https://jobs.github.com/positions.json?",
    data: request,
    dataType: "jsonp",//use jsonp to avoid cross origin issues
    type: "GET"
  })
  //waits for the ajax to return a successful promise object
  .done(function(result){ 
    // test for results
    if (result.length === 0){
    noJobs();
    }
    $.each(result, function(key,value){
      // output function call
      outputJobs(value);
      // console.log(value.company);
    })
 });
}
function outputJobs (comp){
  $('#output-list').append('<li><ul id="results-ul"><li id="each-li"><a href="'
    // company url link anchor tied to clickable company logo
    +comp.company_url+'"target="_blank"><img src="'+comp.company_logo+'"alt="'
    // alternate output if company logo not available
    +comp.company+'"width="350" height="120" id="img"/></a>'+'</li><li id="each-li">'
    // output job type i.e. FT/PT/Other, output title is the job listing title
    +comp.type+'</li><li id="each-li">'+comp.title+'</li><li id="each-li">'
    // location outputs the city and or state job is located, created_at is date of post
    +comp.location+'</li><li id="each-li">'+'<p>'+"Job Posted On: "+comp.created_at+
    '</li><li id="each-li">'+'<p id="how-to">'+ "How to apply: "
    // how to apply lists company instruction, url is link to Github job posting
    +comp.how_to_apply+'</p></li><li id="url"><a href="'+comp.url+'"target="_blank">'
    +"Link to Job Post and Description"+'</a></li></li></ul></li>');
}
function noJobs (){
  $('#output-list').append('<li><ul id="results-ul"><li id="each-li">'
  +'<p id="sorry">'+"Sorry, looks like we couldn't find anything"+'</p>'
  +'<li id="each-li"><p id="sorry">'+"Maybe try a different Job Title or Location"
  +'</p></li></li></ul></li>');
}
function reset(){
  $('#title').click(function(){
    $('#job-title').val('');
    $('#search-location').val('');
    $('#output-list').empty();
    // shows story explain
    $('#explain').show();
  });
}
// **********END OF PROGRAM*********************************