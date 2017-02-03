$(document).ready(function(){
  console.log("sanity check");
  $('.parallax').parallax();

  $(".dropdown-button").dropdown();


  $(".work_btn").click(function() {
      $('html, body').animate({
          scrollTop: $("#my_projects").offset().top
      }, 2000);
  });
});
