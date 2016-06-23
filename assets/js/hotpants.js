function guardian(){

	//Clear guardian div
	$("#guardianDisplay").html("");
	
	//Get politician and subject from dropdown for Guardian API
		var politician = $('#politician option:selected').val();
		var issue = $('#issue option:selected').val();
    var queryURL = "http://content.guardianapis.com/search?section=us-news&q=" + politician + "%20AND%20" + issue + "&page-size=3&api-key=2483b33c-e60d-4d3c-930f-d26c87e3c6aa";

    //Call the Guardian API
	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			// console.log(queryURL);
    	console.log(response);

    $("#guardianDisplay").append("<h2>Latest News from " + "<img src='assets/images/guardian.gif' alt='guardianLogo'>" + "</h2>")

	//Format the information to display 3 articles on the page with links to the Guardian
	for (var i = 0; i < 3; i++) { 
		$("#guardianDisplay").append("<a href='" + response.response.results[i].webUrl + "' target='_blank''>" + "<h3>" + response.response.results[i].webTitle + "</h3>" + "</a>");

    	}

	});
}

function politifact(){
		//Clear politfact div
	$("#politifactDisplay").html("");
	
	//Get politician and subject from dropdown for Politifact API
		var politician = $('#politician option:selected').val();
		var issue = $('#issue option:selected').val();
    var queryURL = "https://crossorigin.me/http://www.politifact.com/api/v/2/statement/?speaker__name_slug=" + politician + "&subject__subject_slug=" + issue +"&ordering=-ruling_date&limit=3&format=json";
    

    //Call the Guardian API
	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			console.log(queryURL);
    	console.log(response);

	//Format the information to display 3 articles on the page with ratings from  Politifact
	for (var i = 0; i < 3; i++) { 
		$("#politifactDisplay").append("<div class='col-md-12 panel panel-default pull-left'> <div class='panel-body'><div class='col-md-4'><img src='" + response.objects[i].speaker.photo + "' alt=" + politician + " width='84' height='73'> </div><div class='col-md-4'> <a href='" + response.objects[i].canonical_url + "'>"+ response.objects[i].statement + "</a><br> -- "+ response.objects[i].speaker.first_name + " " + response.objects[i].speaker.last_name + "</div><div class='col-md-4 pull-right'><img src='" + response.objects[i].ruling.ruling_graphic + "' alt=" + response.objects[i].ruling.ruling + " width='84' height='73'> </div></div></div>");
   }

	// Alternate Format 
	for (var i = 0; i < 3; i++) { 
		$("#politifactDisplay").append("<div class='col-md-12 panel panel-default pull-left'> <div class='panel-body'><ul class='media-list'><li class='media'><div class='media-left'><a href='" + response.objects[i].canonical_url + "'><img class='media-object' src='" + response.objects[i].speaker.photo + "' alt=" + politician + " width='84' height='73'><img class='media-object' src='" + response.objects[i].ruling.ruling_graphic + "' alt=" + response.objects[i].ruling.ruling + " width='84' height='73'></div><div class='media-body'><h4 class='media-heading'>"  + response.objects[i].statement + "</h4> -- " + response.objects[i].speaker.first_name + " " + response.objects[i].speaker.last_name + " </a></div>  </li></ul>");
	}

	});
}

function giphy() {

		$('#giphyDisplay').empty();
		var politician = $('#politician option:selected').val();
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + politician + "&limit=1&api_key=dc6zaTOxFJmzC";
		
		// Creates AJAX call for the button that was clicked
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			console.log(response);

			//loop through response array
			for (var i = 0; i < response.data.length; i++) {
				response.data[i]

				var poliGif = $('<img>').attr("src", response.data[i].images.fixed_height.url);

			// loads image to the page
			$('#giphyDisplay').append(poliGif);
		};

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
		politifact();
		giphy();
		return false;


	});

});