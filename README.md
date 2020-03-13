# Workday Scheduler

Homework #5: Basic Scheduler

## Assignment

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Development Notes

Project HTML and CSS provided

- Added reference to script (HTML)
- Added bottom margin to page (CSS)

### Script Logic

```
Globals
- Create variable for current day (from Moment)
- Create variable for current hour (from Moment)
- Define object array for day planner
	- Get previously defined array from local storage (if exists)

Display Current Day
- Show current day in header

Day Planner
- Create time block for each hour with unique ID
- Create row for each hour
	- Define time label
	- Define user entry box
	- Put events in entry box
	- Define save button
- Create color coding by comparing time block to current time
	- Define past hours - color grey
	- Define current hour - color red
	- Define future hours - color green
- Show time blocks

User Entries
- Get user entry when saved button is clicked
- Define variable for target time block
- Define variable for user input
- Add user input to day planner array
- Update local storage
```

### Known Issues

- Save button gets overlapped in XS viewport

### Deployed Application

https://ingridhoffman.github.io/WorkdayScheduler/
