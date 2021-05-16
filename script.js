$(document).ready(function(){
  $('.content-slider').slick({
    infinite: true,
    speed: 200,
    fade: true,
    slidesToShow: 1,
    autoplay: true, 
    autoplaySpeed: 3500,
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
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
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
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
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
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
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
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true, 
        arrow: true
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          infinite: true,
          arrow: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});




/* window.onbeforeunload = function () { window.scrollTo(0,0); }; */