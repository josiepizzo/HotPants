//Comment
$(document).ready(function() {

	var session = localStorage.getItem('session');
	if (!session) {
		localStorage.setItem('session', JSON.stringify([]));		
	} else {
		var previousHistory = JSON.parse(session);
		
		for (var i = 0; i < previousHistory.length; i++) {
			addToPreviousHistory(previousHistory[i].politician, previousHistory[i].issue);
		}
	}



	$('.modal-trigger').on('click', function() {
        $('#instrutionModal').modal();
    });
});
// ========================================== START CODING BELOW!!
	// **** Created Reference to Firebase Database
	var hotPantsData = new Firebase("https://hotpants.firebaseio.com/");


	function SaveDataToLocalStorage(data)
	{
	    var a = [];
	    a = JSON.parse(localStorage.getItem('session'));
	    a.push(data);
	    localStorage.setItem('session', JSON.stringify(a));
	}

	//call add toprevious history and passin the politicanandtheissue
	function addToPreviousHistory(politician, issue) {
		var row = $("<li class='previous-history-search'><a href='#'>" + politician + ' - ' + issue + "</a></li>");
		row.attr('data-politician', politician);
		row.attr('data-issue', issue);
		$("#searchDropdown").append(row);		
	}

//Get politcian and subject from dropdown for Guardian API
	$('#submit').on('click', function(){
		console.log('in submit');

		var politician = $('#politician option:selected').val().trim();
		var issue = $('#issue option:selected').val().trim();
		console.log(politician);
		console.log(issue);
		guardian();
		politifact();
		giphy();

		addToPreviousHistory(politician,issue);

		// Creates local "temporary" object for holding employee data
		var newSearch = {
			politician:politician,
			issue:issue
		};

		// Uploads employee data to the database
		hotPantsData.push(newSearch);
		SaveDataToLocalStorage(newSearch);


		return false;
	});


$( document ).on( "click", ".previous-history-search", function() {
	console.log('clicked on previous search');
  var politician = $(this).attr('data-politician');
  var issue = $(this).attr('data-issue');
  $("#displayResults").addClass("show");
  console.log(politician);
  console.log(issue);

	$('#politician').val(politician);
	$('#issue').val(issue);

	guardian();
	politifact();
	giphy();



});


