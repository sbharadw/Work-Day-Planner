$(document).ready(function(){

// Display current day, date, and time 
//Time counter in miliseconds reference - https://www.plus2net.com/javascript_tutorial/clock.php

function secondCount () {
    var dateTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(dateTime);
  }
  
setInterval(secondCount, 1000);

//setting background color depending on current time or not 
function backgroundColorChange() {
    currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function () {
        var currentTime = parseInt($(this).attr("id"));

        if (currentTime > currentHour) {
            $(this).addClass("future")
        }
        else if (currentTime === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

backgroundColorChange();


//Present user with the saved input upon refresh of the screen

function workPlanner() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        console.log(this);
        var event = localStorage.getItem(id);
        console.log(event);

        if (event !== null) {
        $(this).children(".description").val(event);
            
        }
    });
}

 workPlanner();


 //use the save button to save any user input in the <textarea></textarea>
var saveButton = $(".saveBtn");

saveButton.on("click", function (e) {
    e.target;
    var eventTime = $(this).parent().attr("id");
    console.log(eventTime);
    var text = $(this).siblings(".description").val();
    console.log(text);

    localStorage.setItem(eventTime, text);
});


});
