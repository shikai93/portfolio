function triggerCaption(e) {
    console.log($(e).parent().find('.contact-caption'));
    var caption = $(e).parent().find('.contact-caption');
    if (caption.hasClass('hidden')) {
        caption.removeClass('hidden');
    } else {
        caption.addClass('hidden');
    }
}