// Creates date dispalyed at top of page
var date = moment().format('dddd' + ', ' + 'MMMM Do');
$('#currentDay').text(date);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\TIME BLOCKS//////////////////////////////////////
// Creates time blocks and places them into containers
var container = $(".container");

// Upon Button Submit
var saveButtonEl = $('.saveBtn');
var eventValue = $('.description');

// Obtain date from input
function handleFormSubmit() {
    var text = $(this).siblings('textarea').val();
    console.log(text);
}

saveButtonEl.on('click', handleFormSubmit);
// Set data as text for input

// Save data from input

// Retrieve saved data
