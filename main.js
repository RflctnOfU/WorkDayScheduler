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

const clickBtns = [
    $('#one'),
    $('#two'),
    $('#three'),
    $('#four'),
    $('#five'),
    $('#six'),
    $('#seven'),
    $('#eight'),
    $('#nine'),
]

var text1 = $('#9').contents().find().text();
var text2 = $('#10').val();
var text3 = $('#11').val();
var text4 = $('#12').val();
var text5 = $('#13').val();
var text6 = $('#14').val();
var text7 = $('#15').val();
var text8 = $('#16').val();
var text9 = $('#17').val();

const textArea = [
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
]

for (var i = 0; i < textBlocks.length; i++) {
    if (textBlocks[i].attr('name') < time) {
        textBlocks[i].removeClass('present future').addClass('past');
    } else if (textBlocks[i].attr('name') == time) {
        textBlocks[i].removeClass('past future').addClass('present');
    } else if (textBlocks[i].attr('name') > time) {
        textBlocks[i].removeClass('past present').addClass('future');
    }
};

for (var i = 0; i < clickBtns.length; i++) {
    clickBtns[i].click(function(e) {
        e.preventDefault();
        // console.log(text);
        console.log(text1);
    });
}

