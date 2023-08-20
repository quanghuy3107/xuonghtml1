
$(document).ready(function() {
  var position = $('.our-success__parameter').offset().top;
  var winHeight = $(window).height();
  var count = 0;

  $(window).scroll(function() {
    var winTop = $(window).scrollTop();

    // Xác định vị trí của phần tử có class "our-success__parameter"
    if (position < winTop + winHeight && count == 0) {
      $('.counter').each(function() {
        var defaultValue = $(this).text();
        $(this).prop('Counter', 0).animate({
          Counter: defaultValue
        }, {
          duration: 1200,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      count = 1;
    } else if (position > winTop + winHeight) {
      count = 0; // Đặt lại biến count khi người dùng cuộn lên trên
    }
  });
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  autoplay:true,
  autoplayTimeOut:3000,
  autoplaySpeed:1000,
  navText: ['<i class="fa-solid fa-angle-left icon-angle icon-angle-left"></i>','<i class="fa-solid fa-angle-right icon-angle icon-angle-right"></i>'],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})