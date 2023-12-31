//Start of function
$(function () {
  // Listener for click events on the save button
  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).parent().attr("id"); // Get the id of the containing time-block
    var description = $(this).siblings(".description").val().trim(); // Get the user input from the textarea
  
    // Save the description in local storage using the time-block id as the key
    localStorage.setItem(timeBlock, description);
  });
  
  // Apply past, present, or future class to each time block
  var currentHour = dayjs().format("H"); // Get the current hour in 24-hour time
  
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]); // Extract the hour from the time-block id
  
    // Compare the time block hour with the current hour and apply the appropriate class
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  
  // Get user input from localStorage and set textarea values
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id"); // Get the time-block id
    var savedDescription = localStorage.getItem(timeBlockId); // Retrieve the corresponding description from localStorage
  
    if (savedDescription !== null) {
      $(this).find(".description").val(savedDescription); // Set the textarea value with the saved description
    }
  });
  
  // Display the current date in the header of the page
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
