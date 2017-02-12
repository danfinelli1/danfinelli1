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
    var email, first_name, last_name, message;
    var formData = $("form").serialize();
    var infoArr = [];
    formData = formData.split('&');
    for (var i = 0; i<formData.length; i++){
      infoArr.push(formData[i].split('=')[1]);
    }
    console.log(infoArr);
    var mailto_link = 'mailto:'+infoArr[2]+'?subject='+infoArr[0]+'%20'+infoArr[1]+'&body='+infoArr[3];
    window.open(mailto_link);
    alert("Thank You!");
  //  window.open('mailto:finelli.daniel@gmail.com');

  });

  $(window).scroll(function(e) {
    if($(window).scrollTop() >=2265) {
       $(window).scrollTop(2265);
    }
  });

});
