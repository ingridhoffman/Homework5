// jQuery
$(function() {});

// get current day & time
console.log(moment());

// set variable for current day
var today = moment().format("dddd, MMMM Do");
console.log(today);

// set variable for current hour
var now = moment().format("H A");
console.log(now);

// set variable for business busHours
var busHours = [
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
console.log(busHours);

// Header
// show current day in header
$("#currentDay").text(today);

// Day Planner
// for each timeblock in business hours create color coded row
busHours.forEach(function(timeBlock) {
	// variable for the time block label
	var timeLabel = timeBlock.time + " " + timeBlock.period;

	// variable for the color of the text area
	var blockColor = colorMe(timeLabel);

	// variable for the user entry row including label and save button
	var row =
		'<div class="time-block" id="' +
		timeBlock.time +
		'"><div class="row no-gutters input-group"><div class="col-sm-2 input-group-prepend hour pl-3 pt-2">' +
		timeLabel +
		'</div><textarea class="form-control ' +
		blockColor +
		'"></textarea><div class="col-sm-2 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div></div>';

	// show timeblock rows
	$(".container").append(row);
});

// function for color coding
function colorMe(time) {
	// variables to compare timeblock time to current time
	var testNow = moment(now, "H A");
	var testBlock = moment(time, "H A");

	// return color style for timeblock
	if (testNow.isBefore(testBlock) === true) {
		return "future";
	} else if (testNow.isAfter(testBlock) === true) {
		return "past";
	} else {
		return "present";
	}
}

// what is .description intended for?
