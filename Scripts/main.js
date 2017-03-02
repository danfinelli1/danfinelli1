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
    var formData = $("form").serialize();
    var infoArr = [];
    formData = formData.split('&');
    for (var i = 0; i<formData.length; i++){
      infoArr.push(formData[i].split('=')[1]);
    }
    var mailto_link = 'mailto:finellidaniel@gmail.com?subject='+infoArr[0]+'%20'+infoArr[1]+'&body='+infoArr[3]+infoArrp[2];
    window.open(mailto_link);
    alert("Just click send! Thank You for reaching out!");

  });

  $(window).scroll(function(e) {
    if($(window).scrollTop() >=2265) {
       $(window).scrollTop(2265);
    }
  });

});
