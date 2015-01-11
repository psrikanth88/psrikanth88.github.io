
$(document).ready(function() {
  navScroll();
  $(window).on('scroll',function() {
    stickyNav();
    navLinker();
  });
});

function navScroll() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('.active').removeClass('active');
    $(this).parent().addClass('active');
    var aid = $(this).attr('href');
    if (aid.length>0) {
      $('body').animate({
        scrollTop: ($(''+ aid+'').offset().top )
      }, 500);
    };
    return false;
  });
}

function stickyNav() {
  var lowerlimit = $('#scroller').offset().top + 20 ;
  if ($(window).scrollTop() > lowerlimit) {
    $('#vertical-nav').css({position: 'fixed'});
  }
  else {
    $('#vertical-nav').css({position: ''});
  }
}

function navLinker(){

  if ($(window).scrollTop() < $('#skills').offset().top) {
  $('.active').removeClass('active');
  $('nav a[href$="profile"]').parent().addClass('active');
  };

  if ($(window).scrollTop() > $('#skills').offset().top) {
  $('.active').removeClass('active');
  $('nav a[href$="skills"]').parent().addClass('active');
  };

  if ($(window).scrollTop() > $('#projects').offset().top) {
  $('.active').removeClass('active');
  $('nav a[href$="projects"]').parent().addClass('active');
  };

  if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
  $('.active').removeClass('active');
  $('nav a[href$="contact"]').parent().addClass('active');
  };
}