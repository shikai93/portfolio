$( window ).load(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        $('#wndr-header').find('img').attr('src', "img/wndr-thumb-phone.jpg");
        $('#secu-ring-header').find('img').attr('src', "img/secu-ring-thumb-phone.jpg");
    }
});

function triggerThumbnail(headerId) {
    
    var header = $('#' + headerId);
    var overlay = header.find('.darken-background');
    var img = header.find('img');
    if (!overlay.hasClass('hidden'))
    {
        img.css({
            'opacity' : '1'
        });
        overlay.addClass('hidden');
    } else {
        img.css({
            'opacity' : '0.2'
        });
        overlay.css({
            'width' : img.width() + 'px',
            'height': img.height() + 'px',
            'left' : '50%',
            'margin-left': '-' + img.width() / 2 + 'px',
            });
        overlay.removeClass('hidden');
    }
}

(function($) {
    
    var wndrData = [
        {
          src: 'img/wndr-thumb.jpg',
          title: 'Overall screenshots of the application'
        },
        {
          src: 'img/wndr.jpg',
          title: 'Thoughts Page'
        },
        {
          src: 'img/wndr1.jpg',
          title: 'Details Page'
        },
        {
          src: 'img/wndr3.jpg',
          title: 'Share Page'
        },
    ];
    $('.wndr-thumbs a').each(function () {
        var $this = $(this);
        index = $this.data('index');
        $this.magnificPopup({
            items: wndrData,
            index : index,
            gallery : {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1]
            },
        type: 'image',
        });
    });
    
    var illuData = [
        {
          src: 'img/illumination1.jpg',
          title: 'Initial Prototype'
        },
        {
          src: 'img/illumination1.jpg',
          title: 'Initial Prototype'
        },
        {
          src: 'img/illumination2.jpg',
          title: 'The electrical circuit built'
        },
        {
          src: 'img/illumination3.mp4',
          title: 'The electrical control mockup',
          type: 'iframe'
        }
    ];
    $('.illu-thumbs a').each(function () {
        var $this = $(this);
        index = $this.data('index');
        $this.magnificPopup({
            items: illuData,
            index : index,
            gallery : {
            enabled: true,
              navigateByImgClick: true,
              preload: [0, 1]
        },
        type: 'image',
    });
    });

    var secuData = [
        {
          src: 'img/secu-ring1.jpg',
          title: ""
        },
        {
          src: 'img/secu-ring2.jpg',
          title: "My Appreciation Gift with colleagues' signatures"
        },
        {
          src: 'img/secu-ring3.jpg',
          title: "Implementation of the trend chart using google charts API"
        },
        {
          src: 'img/secu-ring4.jpg',
          title: "Implementation of the company model"
        },
    ];
    $('.secu-thumbs a').each(function () {
        var $this = $(this);
         index = $this.data('index');
         $this.magnificPopup({
        items: secuData,
        index : index,
        gallery : {
        enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        type: 'image',
    });
    });
    
    var trashifaiData = [
          {
            src: 'img/trashifai.jpg',
            title: 'Trashifai'
          },
          {
            src: 'img/trashifai2.jpg',
            title: 'Trashifai'
          },
          {
            src: 'img/trashifai.mp4',
            title: 'Our demo video',
            type: 'iframe'
          },
          {
            src: 'img/trashifai5.jpg',
            title: 'Working through the night'
          },
        ];
    $('.trashifai-thumbs a').each(function () {
        var $this = $(this);
         index = $this.data('index');
         $this.magnificPopup({
        items: trashifaiData,
        index : index,
        gallery : {
        enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        type: 'image',
    });
    });
})(jQuery);

function openProject(project){
    $('#indiv-proj').removeClass('hidden');
    var offsetNo = $('#' + project).offset().top - $('#trashifai').offset().top;
    $('.contents').animate({
           scrollTop: offsetNo + 'px'
       }, 'medium');
    $('#thumbnails').addClass('hidden');
}
    
function thumbnailView() {
    
    $('#indiv-proj').addClass('hidden');
    $('#thumbnails').removeClass('hidden');
}

$( "#indiv-proj" ).hover(
  hoverIn,
  function() {
    var dropdownImg = $('.dropdown-img');
    dropdownImg.css('opacity', 0);
    dropdownImg.css('cursor', 'default');
  }
);

function hoverIn() {
    var dropdownImg = $('.dropdown-img');
    var contents = $('.contents');
    if (parseInt(contents[0].scrollHeight - contents.scrollTop()) > contents.outerHeight() + 50) {
        dropdownImg.css('opacity', 0.3);
        dropdownImg.css('cursor', 'pointer');
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

var wndrDiv = $('#wndr');
var illuminationDiv = $('#illumination');
var secuDiv = $('#secu-ring');
var trashifaiDiv = $('#trashifai');
var contents = $('.contents');
$('.down-icon').click(
    function(){
        if (contents.scrollTop() < wndrDiv.offset().top - trashifaiDiv.offset().top) {
            contents.animate({
                scrollTop: wndrDiv.offset().top - trashifaiDiv.offset().top + 'px'
            }, 'medium');
        } else if (contents.scrollTop() < illuminationDiv.offset().top - trashifaiDiv.offset().top) {
            contents.animate({
                scrollTop: illuminationDiv.offset().top - trashifaiDiv.offset().top + 'px'
            }, 'medium');
        } else if (contents.scrollTop() < secuDiv.offset().top - trashifaiDiv.offset().top) {
            contents.animate({
                scrollTop: secuDiv.offset().top - trashifaiDiv.offset().top + 'px'
            }, 'medium');
        } else {
            contents.animate({
                scrollTop: contents[0].scrollHeight + 'px'
            }, 'medium');
            var dropdownImg = $('.dropdown-img');
            dropdownImg.css('opacity', 0);
            dropdownImg.css('cursor', 'default');
        }
    }
);