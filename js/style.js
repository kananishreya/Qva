
$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
dots:false,
dotsEach:true,
smartSpeed:1000,
nav:false,
responsive:{
0:{
    items:1
},
600:{
    items:3
},
1000:{
    items:1
}
}
})

var owl = $('.owl-carousel');
owl.owlCarousel();
owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
})

wow = new WOW(
              {
              boxClass:     'wow',      // default
              animateClass: 'animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true        // default
            }
            )
            wow.init();


$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 150) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(document).ready(function () {
    $("#cil-silder").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        scroll:auto,
        items: 1,
    });
});

  $(document).ready(function () {
    $("#cil-image").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        scroll:auto,
        items: 4,
    });
});

$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 150) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });



$(document).ready(function(){
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);
    
    var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
})