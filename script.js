$(document).ready(function(){
  $('.content-slider').slick({
    infinite: true,
    speed: 200,
    fade: true,
    slidesToShow: 1,
    nextArrow:$('.next'), 
    prevArrow:$('.prev')
  });
});

$(document).ready(function(){
  $('#latest-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    focusOnSelect: false,
    nextArrow:$('#latest-next'), 
    prevArrow:$('#latest-prev'),
    arrow: true,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 1301,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
    ]
  });
});

$(document).ready(function(){
  $('#trending-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    focusOnSelect: false,
    nextArrow:$('#trending-next'), 
    prevArrow:$('#trending-prev'),
    arrow: true,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 1301,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
    ]
  });
});

$(document).ready(function(){
  $('#kdrama-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    focusOnSelect: false,
    nextArrow:$('#kdrama-next'), 
    prevArrow:$('#kdrama-prev'),
    arrow: true,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 1301,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
    ]
  });
});

$(document).ready(function(){
  $('#anime-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    focusOnSelect: false,
    nextArrow:$('#anime-next'), 
    prevArrow:$('#anime-prev'),
    arrow: true,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 1301,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
    ]
  });
});

//Fill heart when clicked
$(document).on('click', '.filled',function(){
  $(this).toggleClass('fill-heart')
});

// Expand and Collapse searchbar when search icon is clicked 
$('.fa-search').click(function(){
  $('.search-input').toggleClass('toggle')
});

//Collapse searchbar when clicked away
$(document).click(function(event){
  if(!$(event.target).parent('.searchbar').length){
    $('.searchbar').find('.search-input').removeClass('toggle');
  }
});


//Toggle between password visibility
$(function(){
  $('.togglePassword').click(function(){
    $(this).toggleClass('fa-eye-slash');
    var x = $('.password').attr('type'); 
    if(x == 'password'){
      $('.password').attr('type', 'text')
    }else{
      $('.password').attr('type', 'password')
    }
  });
});



