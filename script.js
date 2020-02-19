// jQuery
$(function() {});

// set variable for current date/time
var a = moment();
console.log(a);

// set variable for business hours
var hours = [
	{ time: 9, period: "AM" },
	{ time: 10, period: "AM" },
	{ time: 11, period: "AM" },
	{ time: 12, period: "PM" },
	{ time: 1, period: "PM" },
	{ time: 2, period: "PM" },
	{ time: 3, period: "PM" },
	{ time: 4, period: "PM" },
	{ time: 5, period: "PM" }
];
console.log(hours);

// show current time in header
$("#currentDay").text(a.format("dddd, MMMM Do"));

// create day planner
hours.forEach(newRow);

// function to create each row
function newRow(currentHour) {
	console.log(currentHour);

	// variable for the row label in time format
	var timeLabel = currentHour.time + " " + currentHour.period;
	console.log(timeLabel);

	// variable for input group including time label and save button
	var row =
		'<div class="row time-block no-gutters input-group"><div class="col-sm-2 input-group-prepend hour pl-3 pt-2">' +
		timeLabel +
		'</div><textarea class="form-control"></textarea><div class="col-sm-2 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div>';
	$(".container").append(row);
}

// what is .description intended for?
// is .time-block used with .row or somewhere else?
