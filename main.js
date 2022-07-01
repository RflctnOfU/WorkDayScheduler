//function save buttons 
    //listen for click on save textfields
    //getting value of text fields
    //save to local storage
    //appointment added to local storage and checkmark notification

    //getting previous saved values, and displaying
    //get value from local storage
    // give associated textarea the retrieved value
    
    // changing bg color based on time of day --- use class assignment .past .present .future
    //compare current time with time block
        //do with moment - var = current time
    //loop over blocks - if time < current
    //time bg-grey - else if time = current time bg-red - else bg-green.

// Displays current time
let currentDay = moment().format('dddd, MMMM Do');

$('#currentDay').text(currentDay);
let time = moment().format('HH');
console.log(time);

const textBlocks = [
    $('textarea#9'),
    $('textarea#10'),
    $('textarea#11'),
    $('textarea#12'),
    $('textarea#13'),
    $('textarea#14'),
    $('textarea#15'),
    $('textarea#16'),
    $('textarea#17'),
];

for (var i = 0; i < textBlocks.length; i++) {
    if (textBlocks[i].attr('name') < time) {
        textBlocks[i].removeClass('present future').addClass('past');
    } else if (textBlocks[i].attr('name') == time) {
        textBlocks[i].removeClass('past future').addClass('present');
    } else if (textBlocks[i].attr('name') > time) {
        textBlocks[i].removeClass('past present').addClass('future');
    }
};