// takes a string of semi-colon separated tags to be searched
// for on StackOverflow
// var getUnanswered = function(tags) {
  
//  // the parameters we need to pass in our request to StackOverflow's API
//  var request = { 
//    tagged: tags,
//    site: 'stackoverflow',
//    order: 'desc',
//    sort: 'creation'
//  };
  
//  $.ajax({
//    url: "https://api.stackexchange.com/2.2/questions/unanswered",
//    data: request,
//    dataType: "jsonp",//use jsonp to avoid cross origin issues
//    type: "GET"
//  })
//  .done(function(result){ //this waits for the ajax to return with a succesful promise object
    
//    var searchResults = showSearchResults(request.tagged, result.items.length);

//    console.log(result);

//    $('.search-results').html(searchResults);
//    //$.each is a higher order function. It takes an array and a function as an argument.
//    //The function is executed once for each item in the array.
//    $.each(result.items, function(i, item) {
//      var question = showQuestion(item);
//      $('.results').append(question);
//    });
//  })

//**********************************************************************

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