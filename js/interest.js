$( window ).load(function() {

    var cw = $('.thumbnail-image').width();
    $('.thumbnail-image').css({
    'height': cw + 'px'
    });

    $('.thumbnail-header').css({
    'width' : cw + 'px',
    'height': cw + 'px'
    });
});


function triggerThumbnail(divId) {
    var el = $('#' + divId);
    if (el.hasClass('phone')) {
        return;
    }
    if (el.hasClass('hidden')) {
        el.removeClass('hidden');
        el.parent().find('img').css('opacity',0.1);
    } else {
        el.addClass('hidden');
        el.parent().find('img').css('opacity',1);
    }
}

function triggerInterest (interestId) {
    $('#thumbnailRow').addClass('hidden');
    $('#interests').removeClass('hidden');
    var offsetNo = $('#' + interestId).offset().top - $('#interests').offset().top;
    $('.contents').animate({
           scrollTop: offsetNo + 'px'
       }, 'fast');
}

function thumbnailView(interestId) {
    $('#thumbnailRow').removeClass('hidden');
    $('#interests').addClass('hidden');
}

var danceData = [{
            src: 'img/dance.jpg',
            title: 'Performance for a school event organized for my coursemates'
          },
          {
            src: 'img/dance1.jpg',
            title: 'Masterclass with Locking Saga'
          },
          {
            src: 'img/dance4.mp4',
            title: 'Our showcase performance for NTU Funk Jam 2016',
            type: 'iframe'
          },
          {
            src: 'img/dance2.jpg',
            title: 'Masterclass with A-Meng'
          },
          ];

$('.dance-thumbs a').each(function () {
    var $this = $(this);
    index = $this.data('index');
    $this.magnificPopup({
    items: danceData,
    index : index,
    gallery : {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    type: 'image',
    });
});

var sketchData = [
        {
        src: 'img/sketch-thumb.jpg',
        title: 'Sketching Tools'
        },
        {
        src: 'img/sketch1.jpg',
        title: 'Turtle busy coding'
        },
        {
        src: 'img/sketch3.jpg',
        title: 'Shy turtle'
        },
        {
        src: 'img/sketch2.jpg',
        title: 'Happy turtle'
        },
        {
        src: 'img/sketch4.jpg',
        title: 'My shoe design final iteration for the industrial design class'
        },
        {
        src: 'img/sketch5.jpg',
        title: 'Shoe design 2nd iteration'
        },
        {
        src: 'img/sketch6.jpg',
        title: 'Shoe design 1st iteration'
        },
        ];

$('.sketch-thumbs a').each(function () {
    var $this = $(this);
    index = $this.data('index');
    $this.magnificPopup({
    items: sketchData,
    index : index,
    gallery : {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    type: 'image',
    });
});

var travelData = [
          {
            src: 'img/travel1.jpg',
            title: 'Arches National Park in United States'
          },
          {
            src: 'img/travel.jpg',
            title: 'Mount Rinjani at Indonesia'
          },
          {
            src: 'img/rinjani1.jpg',
            title: 'Summit Climb of Mount Rinjani at Indonesia'
          },
          {
            src: 'img/rinjani2.jpg',
            title: 'Mount Rinjani at Indonesia'
          },
          {
            src: 'img/jeju1.jpg',
            title: 'My Travel Companions in Jeju'
          },
          {
            src: 'img/jeju2.jpg',
            title: 'Typical Meal in Korea'
          },
          {
            src: 'img/berlin.jpg',
            title: 'Berlin Wall Graffiti'
          },];

$('.travel-thumbs a').each(function () {
    var $this = $(this);
    index = $this.data('index');
    $this.magnificPopup({
    items: travelData,
    index : index,
    gallery : {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    type: 'image',
    });
});

$( "#interests" ).hover(
  blink,
  function() {
    $('.dropdown-img').css('opacity', 0);
  }
);

function blink() {
    var dropdownImg = $('.dropdown-img');
    var contents = $('.contents');
    if (parseInt(contents[0].scrollHeight - contents.scrollTop()) > contents.outerHeight() + 50) {
        dropdownImg.css('opacity', 0.3);
    }
}

var scrolldelay;
$('.down-icon').hover(
    function() {
        var contents = $('.contents');
        scrolldelay = setInterval(function(){
            contents.scrollTop(contents.scrollTop() + 1);
        },10);
    },
    function() {
        clearInterval(scrolldelay);
    }
);