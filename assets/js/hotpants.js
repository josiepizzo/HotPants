function guardian(){

		var politician = $('#politician option:selected').val();
		var issue = $('#issue option:selected').val();
    var queryURL = "http://content.guardianapis.com/search?section=us-news&q=" + politician + "%20AND%20" + issue + "&page-size=3&api-key=2483b33c-e60d-4d3c-930f-d26c87e3c6aa";

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			console.log(queryURL);
    	console.log(response);

	});
}


$( document ).ready(function() {

//Get politcian and subject from dropdown for Guardian API
	$('#submit').on('click', function(){
		
		var politician = $('#politician option:selected').val();
		var issue = $('#issue option:selected').val();
	console.log(politician);
	console.log(issue);
		guardian();
		return false;


	});

});