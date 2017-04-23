function triggerThumbnail(headerId) {
    
    var header = $('#' + headerId);
    var overlay = header.find('.darken-background');
    var img = header.find('img');
    if (!overlay.hasClass('hidden'))
    {
        overlay.removeClass('onHover');
        img.css({
            'opacity' : '1'
        });
        overlay.addClass('hidden');
    } else {
        overlay.addClass('onHover');
        img.css({
            'opacity' : '0.1'
        });
        overlay.css({
            'width' : img.width() + 'px',
            'height': img.height() + 'px',
            'margin-left': img.css("margin-left"),
            });
        overlay.removeClass('hidden');
    }
    
}

(function($) {
    
    $('#wndr-photos').magnificPopup({
        items: [
          {
            src: 'img/wndr.jpg',
            title: 'Thoughts Page'
          },
          {
            src: 'img/wndr1.jpg',
            title: 'Details Page'
          },
          {
            src: 'img/wndr2.jpg',
            title: 'Home Page'
          },
          {
            src: 'img/wndr3.jpg',
            title: 'Share Page'
          },
          {
            src: 'img/wndr4.jpg',
            title: 'feed Page'
          }
        ],
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        type: 'image' // this is default type
    });
    
    $('#secu-ring-photos').magnificPopup({
        items: [
          {
            src: 'img/secu-ring1.jpg',
            title: 'Secu-ring'
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
          {
            src: 'img/secu-ring5.jpg',
            title: "Implementation of PDF export functions"
          },
        ],
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        type: 'image' // this is default type
    });
    
    $('#trashifai-photos').magnificPopup({
        items: [
          {
            src: 'img/trashifai.jpg',
            title: 'Trashifai'
          },
          {
            src: 'img/trashifai3.jpg',
            title: 'Our Team'
          },
          {
            src: 'img/trashifai4.jpg',
            title: 'Working through the night'
          },
          {
            src: 'img/trashifai5.jpg',
            title: 'Team hard at work'
          },
          {
            src: 'img/trashifai2.jpg',
            title: 'Our Prototype'
          },
          {
            src: 'img/trashifai.mp4',
            title: 'Our demo video',
            type: 'iframe'
          },
          {
            src: 'https://drive.google.com/file/d/0B_v-8cJZYSKEVjFlcGNILWpnclE/preview',
            title: 'Our promotional video',
            type: 'iframe'
          },
        ],
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        type: 'image' // this is default type
    });
})(jQuery);

function openProject(project){
    $('#indiv-proj').removeClass('hidden');
    var offsetNo = $('#' + project).offset().top - $('#wndr').offset().top;
    $('.contents').animate({
           scrollTop: offsetNo + 'px'
       }, 'fast');
    $('#thumbnails').addClass('hidden');
}
    
function thumbnailView() {
    
    $('#indiv-proj').addClass('hidden');
    $('#thumbnails').removeClass('hidden');
}