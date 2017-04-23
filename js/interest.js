var cw = $('.thumbnail-image').width();

$('.thumbnail-image').css({
    'height': cw + 'px'
});

$('.thumbnail-header').css({
    'width' : cw + 'px',
    'height': cw + 'px'
});

function triggerThumbnail(divId) {
    var el = $('#' + divId);
    if (el.hasClass('hidden')) {
        el.removeClass('hidden');
        el.parent().find('img').css('opacity',0.2);
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

$('#dance-photos').magnificPopup({
        items: [
          {
            src: 'img/dance.jpg',
            title: 'Performance for a school event organized for my coursemates'
          },
          {
            src: 'img/dance1.jpg',
            title: 'Masterclass with Locking Saga'
          },
          {
            src: 'img/dance2.jpg',
            title: 'Masterclass with A-Meng'
          },
          {
            src: 'img/dance3.jpg',
            title: 'My first performance on a big stage in 2015'
          },
          {
            src: $('<div class="white-popup"><video controls><source src = "img/dance4.mp4" type="video/mp4"></video></div>'),
            title: 'Our showcase performance for NTU Funk Jam 2016',
            type: 'inline'
          },
          {
            src: $('<div class="white-popup"><video controls><source src = "img/dance5.mp4" type="video/mp4"></video></div>'),
            title: 'My freestyle video at B-Series 2017',
            type: 'inline'
          },
        ],
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        type: 'image' // this is default type
    });

$('#sketch-photos').magnificPopup({
        items: [
          {
            src: 'img/sketch1.jpg',
            title: 'Turtle busy coding'
          },
          {
            src: 'img/background.jpg',
            title: 'First sketch of the turtle'
          },
          {
            src: 'img/sketch2.jpg',
            title: 'Happy turtle'
          },
          {
            src: 'img/sketch3.jpg',
            title: 'Shy turtle'
          },
          {
            src: 'img/sketch4.jpg',
            title: 'My shoe design final iteration for the industrial design class'
          },
          {
            src: 'img/sketch6.jpg',
            title: 'Shoe design 1st iteration'
          },
          {
            src: 'img/sketch5.jpg',
            title: 'Shoe design 2nd iteration'
          },
        ],
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        type: 'image' // this is default type
    });

$('#travel-photos').magnificPopup({
        items: [
          {
            src: 'img/travel1.jpg',
            title: 'Arches National Park in United States'
          },
          {
            src: 'img/travel.jpg',
            title: 'Mount Rinjani at Indonesia'
          },
          {
            src: 'img/jeju.jpg',
            title: 'Cheong Jee Hyeon Waterfall in Jeju'
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
            src: 'img/rinjani1.jpg',
            title: 'Summit Climb of Mount Rinjani at Indonesia'
          },{
            src: 'img/rinjani2.jpg',
            title: 'Mount Rinjani at Indonesia'
          },{
            src: 'img/berlin.jpg',
            title: 'Berlin Wall Graffiti'
          },
        ],
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        type: 'image' // this is default type
    });
