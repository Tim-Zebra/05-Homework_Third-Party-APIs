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
    // Stores new data into the object
    eventData[locationId] = locationData;
    localStorage.setItem("events", JSON.stringify(eventData));
    console.log(eventData);
}


// loads local data if present
loadData();
function loadData () {
    // Stores new data into the object
    var storedEventData = JSON.parse(localStorage.getItem("events"));
    if (storedEventData !== null) {
        eventData = storedEventData;
    }
    applyEvents();
}

// Applies saved data to events
function applyEvents () {
    // create a variable that equals the event id
    $('div').each(function () {
        var id = $(this);
        var idValue = $(this).attr('id');

        // confirms we have an id attribute in our div
        if(idValue !== undefined) {
            // Matches if the id is present in the object
            if (eventData[idValue] !== null) {
                // grabs the textarea element and applies eventData
                id.children('textarea').val(eventData[idValue]);
            }
        }
    }
    );
}


saveButtonEl.on('click', handleFormSubmit);






