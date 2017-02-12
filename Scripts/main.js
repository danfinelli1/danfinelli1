$(document).ready(function(){
  console.log("sanity check");
  $('.parallax').parallax();

  $(".dropdown-button").dropdown();

  $(".work_btn").click(function() {
      $('html, body').animate({
          scrollTop: $("#my_projects").offset().top
      }, 2000);
  });

  $(".work_drop").click(function() {
      $('html, body').animate({
          scrollTop: $("#my_projects").offset().top
      }, 2000);
  });

  $(".am_drop").click(function() {
      $('html, body').animate({
          scrollTop: $("#am").offset().top
      }, 2000);
  });

  $(".reach_drop").click(function() {
      $('html, body').animate({
          scrollTop: $("#reach").offset().top
      }, 2000);
  });

  $(".form_btn").submit(function (event) {
    event.preventDefault();
    var formData = $(".form_btn").serialize();
    console.log(formData);
    window.open('mailto:test@example.com');
  });

  $(window).scroll(function(e) {
    if($(window).scrollTop() >=2250) {
       $(window).scrollTop(2250);
    }
  });

});
