// Creates date dispalyed at top of page
var date = moment().format('dddd' + ', ' + 'MMMM Do');
$('#currentDay').text(date);

// Stores the data from each time event as an object
var eventData = {};

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\TIME BLOCKS//////////////////////////////////////
// Creates time blocks and places them into containers
var container = $(".container");

// Upon Button Submit
var saveButtonEl = $('.saveBtn');
var eventValue = $('.description');

// Obtain date from input
function handleFormSubmit() {
    // Gets the text value from the submission input
    var text = $(this).siblings('textarea').val();

    // Gets the value of the ID at submission input
    var timeId = $(this).parent().attr('id');

    // Saves data to specific location denoted by Id
    saveData(timeId, text);

}

// Save data locally from input
function saveData (locationId, locationData) {
    console.log(locationId);
    console.log(locationData);

    eventData[locationId] = locationData;

    console.log(eventData);
}

saveButtonEl.on('click', handleFormSubmit);





// Retrieve saved data
