 $(document).ready(function() {
  var carousel = $("#carousel").featureCarousel({
          // include options like this:
          // (use quotes only for string values, and no trailing comma after last option)
          // option: value,
          // option: value
        });

  $("#but_prev").click(function () {
    carousel.prev();
  });
  $("#but_pause").click(function () {
    carousel.pause();
  });
  $("#but_start").click(function () {
    carousel.start();
  });
  $("#but_next").click(function () {
    carousel.next();
  });
  $('.pricing-column__basic').mouseover(function(){
    $('.pricing-column__price-bgi__basic').toggleClass('pricing-column__price-bgi-active');
    $('.pricing-column__button__basic').toggleClass('pricing-column__button-active');
  });
  $('.pricing-column__basic').mouseout(function(){
    $('.pricing-column__price-bgi__basic').toggleClass('pricing-column__price-bgi-active');
    $('.pricing-column__button__basic').toggleClass('pricing-column__button-active');
  });
  $('.pricing-column__standart').mouseover(function(){
    $('.pricing-column__price-bgi__standart').toggleClass('pricing-column__price-bgi-active');
    $('.pricing-column__button__standart').toggleClass('pricing-column__button-active');    
  });
  $('.pricing-column__standart').mouseout(function(){
    $('.pricing-column__price-bgi__standart').toggleClass('pricing-column__price-bgi-active');
    $('.pricing-column__button__standart').toggleClass('pricing-column__button-active');   
  });
  $('.pricing-column__premium').mouseover(function(){
    $('.pricing-column__price-bgi__premium').toggleClass('pricing-column__price-bgi-active');
    $('.pricing-column__button__premium').toggleClass('pricing-column__button-active');   
  });
  $('.pricing-column__premium').mouseout(function(){
    $('.pricing-column__price-bgi__premium').toggleClass('pricing-column__price-bgi-active');
    $('.pricing-column__button__premium').toggleClass('pricing-column__button-active');   
  });
  $('.pricing-column__enterprise').mouseover(function(){
    $('.pricing-column__price-bgi__enterprise').toggleClass('pricing-column__price-bgi-active');
    $('.pricing-column__button__enterprise').toggleClass('pricing-column__button-active');   
  });
  $('.pricing-column__enterprise').mouseout(function(){
    $('.pricing-column__price-bgi__enterprise').toggleClass('pricing-column__price-bgi-active');
    $('.pricing-column__button__enterprise').toggleClass('pricing-column__button-active');   
  });

  $('.ios-active').mouseover(function(){
    $('.download__for-phone__link__icon-ios').toggleClass('active_icon-ios');
  });
  $('.ios-active').mouseout(function(){
    $('.download__for-phone__link__icon-ios').toggleClass('active_icon-ios');
  });


  $('.android-active').mouseover(function(){
    $('.download__for-phone__link__icon-android').toggleClass('active_icon-android');
  });
  $('.android-active').mouseout(function(){
    $('.download__for-phone__link__icon-android').toggleClass('active_icon-android');
  });

  $('.windows-active').mouseover(function(){
    $('.download__for-phone__link__icon-windows').toggleClass('active_icon-windows');
  });
  $('.windows-active').mouseout(function(){
    $('.download__for-phone__link__icon-windows').toggleClass('active_icon-windows');
  });
});