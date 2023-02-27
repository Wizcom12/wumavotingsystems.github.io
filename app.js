button = document.getElementById("survey-button-1");
button.addEventListener("click", function() {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScQzD9YtWrHhZddE6oQKlvGAdM9jCV4voS3mPgKj-0V2hCWFA/viewform";
});


button = document.getElementById("survey-button-2");
button.addEventListener("click", function() {
 window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeLMgVBbM6ikIcreszFQU2GicUbAHYBNo6iDy-UZDxCwSviZQ/viewform";
});




button = document.getElementById("survey-button-3");
button.addEventListener("click", function() {
 window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf9gZDiEXJ8FfMUtIbBUtR3ZnYM84KoiZymbvPH3xmT8CjKvQ/viewform";
});



button = document.getElementById("survey-button-4");
button.addEventListener("click", function() {
 window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSebAzZLBFCwuUXaPYqsvxO9SA-5CXpX2qBQvTZtL5bnEIC4tg/viewform";
});




button = document.getElementById("survey-button-5");
button.addEventListener("click", function() {
 window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc9Vm6yRfWcOfnM7yfOdwMkjxzvVCN81IAx6QppqBNRhkrknQ/viewform";
});


/*navigation bar */


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }

 // Set the target date
var targetDate = new Date("February 26, 2023 23:59:59");

// Update the count down every 1 second
var countdownInterval = setInterval(function() {
 // Get today's date and time
 var currentDate = new Date().getTime();
 
 // Find the distance between the target date and current date
 var distance = targetDate - currentDate;
 
 // Time calculations for days, hours, minutes, and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 // Display the result in the element with id="countdown"
 document.getElementById("days").innerHTML = days + "d";
 document.getElementById("hours").innerHTML = hours + "h";
 document.getElementById("minutes").innerHTML = minutes + "m";
 document.getElementById("seconds").innerHTML = seconds + "s";
 
 // If the count down is finished, stop the interval and display a message
 if (distance < 0) {
   clearInterval(countdownInterval);
   document.getElementById("countdown").innerHTML = "VOTING ENDED";
   
 }
}, 1000);


// Set the end date
var endDate = new Date("February 24, 2023 23:59:59");

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the end date
  var distance = endDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"

    document.getElementById("days2").innerHTML = days + "d ";
   document.getElementById("hours2").innerHTML = hours + "h ";
    document.getElementById("minutes2").innerHTML = minutes + "m ";
   document.getElementById("seconds2").innerHTML = seconds + "s ";


  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "VOTING ENDED";
  }
}, 1000);



  // Set the target date
var targetDate = new Date("February 26, 2023 23:59:59");

// Update the count down every 1 second
var countdownInterval = setInterval(function() {
 // Get today's date and time
 var currentDate = new Date().getTime();
 
 // Find the distance between the target date and current date
 var distance = targetDate - currentDate;
 
 // Time calculations for days, hours, minutes, and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 // Display the result in the element with id="countdown"
 document.getElementById("days").innerHTML = days + "d";
 document.getElementById("hours").innerHTML = hours + "h";
 document.getElementById("minutes").innerHTML = minutes + "m";
 document.getElementById("seconds").innerHTML = seconds + "s";
 
 // If the count down is finished, stop the interval and display a message
 if (distance < 0) {
   clearInterval(countdownInterval);
   document.getElementById("countdown").innerHTML = "VOTING ENDED"; 
   
 }
}, 1000);



 // Set the target date
var targetDate = new Date("February 26, 2023 23:59:59");

// Update the count down every 1 second
var countdownInterval = setInterval(function() {
 // Get today's date and time
 var currentDate = new Date().getTime();
 
 // Find the distance between the target date and current date
 var distance = targetDate - currentDate;
 
 // Time calculations for days, hours, minutes, and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 // Display the result in the element with id="countdown"
 document.getElementById("days").innerHTML = days + "d";
 document.getElementById("hours").innerHTML = hours + "h";
 document.getElementById("minutes").innerHTML = minutes + "m";
 document.getElementById("seconds").innerHTML = seconds + "s";
 
 // If the count down is finished, stop the interval and display a message
 if (distance < 0) {
   clearInterval(countdownInterval);
   document.getElementById("countdown").innerHTML = "VOTING ENDED";
   
 }
}, 1000);


 // Set the target date
var targetDate = new Date("February 26, 2023 23:59:59");

// Update the count down every 1 second
var countdownInterval = setInterval(function() {
 // Get today's date and time
 var currentDate = new Date().getTime();
 
 // Find the distance between the target date and current date
 var distance = targetDate - currentDate;
 
 // Time calculations for days, hours, minutes, and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 // Display the result in the element with id="countdown"
 document.getElementById("days").innerHTML = days + "d";
 document.getElementById("hours").innerHTML = hours + "h";
 document.getElementById("minutes").innerHTML = minutes + "m";
 document.getElementById("seconds").innerHTML = seconds + "s";
 
 // If the count down is finished, stop the interval and display a message
 if (distance < 0) {
   clearInterval(countdownInterval);
   document.getElementById("countdown").innerHTML = "VOTING ENDED";
   
 }
}, 1000);

 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

