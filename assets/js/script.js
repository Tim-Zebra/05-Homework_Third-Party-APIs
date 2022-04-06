// Creates date dispalyed at top of page
var date = moment().format('dddd' + ', ' + 'MMMM Do');
$('#currentDay').text(date);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\TIME BLOCKS//////////////////////////////////////
// Creates time blocks and places them into containers
var container = $(".container");

