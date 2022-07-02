// Displays current time
let currentDay = moment().format('dddd, MMMM Do');
//tracking current hour in 24h clock
$('#currentDay').text(currentDay);
let time = moment().format('HH');
//textBlocks and for() for setting color background of event blocks
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
//save events to local storage
function saveSchedule(){
    var hour = $(this).siblings(".hour").text();

    var toDo = $(this).siblings(".toDo").val();
    console.log(hour);
    console.log(toDo);

    if (toDo === '') {
        localStorage.setItem(hour, '')
    } else {
        localStorage.setItem(hour, toDo);
    }
}
//on load function will display any events that have been saved
function init () {
    $('.toDo#9').val(localStorage.getItem('9AM'));
    $('.toDo#10').val(localStorage.getItem('10AM'));
    $('.toDo#11').val(localStorage.getItem('11AM'));
    $('.toDo#12').val(localStorage.getItem('12PM'));
    $('.toDo#13').val(localStorage.getItem('1PM'));
    $('.toDo#14').val(localStorage.getItem('2PM'));
    $('.toDo#15').val(localStorage.getItem('3PM'));
    $('.toDo#16').val(localStorage.getItem('4PM'));
    $('.toDo#17').val(localStorage.getItem('5PM'));
}
//pop up text letting user know event was saved
function notification() {
    const timeOutNotify = setTimeout(timeOut, 2000);
}

function timeOut(){
    $('.notification-block').text('');
}

//listener function for displaying notification saved to local storage, and saving to local storage
$('.saveBtn').click(function(){
    $('.notification-block').text('To Do saved to local storage ✅');
    notification();
});

$('.saveBtn').click(saveSchedule);

init ();