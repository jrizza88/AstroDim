console.log("successfully connected!");

$(document).ready(function(){
  console.log("jQuery loaded!")



  $("#astroHome").on("click", function(){
    document.location.href="/";
    console.log("home button clicked");
  });



});  // closing out document.ready function