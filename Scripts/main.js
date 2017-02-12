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

  $("form").submit(function (event) {
    event.preventDefault();
    var mailto_link = 'mailto:'+email+'?subject='+first_name+'%20'+last_name+'&body='+textarea1;
    $(window).open(mailto_link);
    alert("Thank You!");
    var formData = $("form").serialize();
    console.log(formData);
  //  window.open('mailto:finelli.daniel@gmail.com');

  });

  $(window).scroll(function(e) {
    if($(window).scrollTop() >=2265) {
       $(window).scrollTop(2265);
    }
  });

});
