//Comment
$(document).ready(function() {

	var politician = "";
	var prevPolitician = "";

    console.log("ready!");

	$('.modal-trigger').on('click', function() {
        $('#instrutionModal').modal();
    });
});
// ========================================== START CODING BELOW!!
	// **** Created Reference to Firebase Database
	var hotPantsData = new Firebase("https://hotpants.firebaseio.com/");


//Get politcian and subject from dropdown for Guardian API
	$('#submit').on('click', function(){
		
		politician = $('#politician option:selected').val().trim();
		var issue = $('#issue option:selected').val().trim();
		console.log(politician);
		console.log(issue);
		guardian();
		return false;
	});

// 2. Button for previous searches
$("#prevSearch").on("click", function(){
	console.log("politician is ", politician);
	prevPolitician = politician;
	console.log(prevPolitician);
	// Grabs user input
		politician = $('#politician option:selected').val();
		console.log(politician);
		var issue = $('#issue option:selected').val();

		// Creates local "temporary" object for holding employee data
	var newSearch = {
		politician:politician,
		issue:issue
	}

	// Uploads employee data to the database
	hotPantsData.push(newSearch);

	// Add each train's data into the table
// 	$("#employeeTable > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" + empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");

// 	var tableRow = $("<tr>");
// 	var tableData1 = $("<td>");
// 	tableData1.html(empName);
// 	var tableData2 = $("<td>");
// 	tableData2.html(empRole);
// 	var tableData3 = $("<td>");
// 	var tableData4 = $("<td>");
// 	tableRow.append(tableData1);
// 	tableRow.append(tableData2);
// 	tableRow.append(tableData3);
// 	tableRow.append(tableData4);
// 	$("#employeeTable > tbody").append(tableRow);
//<li><a href="#">Action</a></li>
// });
	
	$("#searchDropdown").append("<li><a href='#'>" + prevPolitician + "</a></li>")


		// Logs everything to console
		console.log(politician);
	console.log(newSearch.politician);
	console.log(issue.issue);

});