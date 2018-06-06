console.log("successfully connected!");

$(document).ready(function(){
  console.log("jQuery loaded!")


  $("#astroHome").on("click", function(){
    document.location.href="/";
    console.log("home button clicked");
  });

  $(".astroMain").click(function(){
    window.location = $(this).find("a").attr("href")
  });

  // $(".astroMain").on("mouseenter mouseleave", function(){
  //   $(this).find('.pics').fadeToggle(100);
  // });

// toggle opacity when hovering image
$(".pics").hover(function(){
       $(this).animate({'opacity': '0.4'}, 100);
  },
  function(){
    $(this).animate({'opacity': '1'}, 100);
  });

});  // closing out document.ready function