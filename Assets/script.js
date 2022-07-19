var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);


$(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
    })

function timeR(){

    var currentTime = moment().hour();

    $(".time-block").each(function(){

        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        if(timeBlock < currentTime){
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        if(timeBlock === currentTime){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        if(timeBlock > currentTime){
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        
    })



};

timeR();

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));