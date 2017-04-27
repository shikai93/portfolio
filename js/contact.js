function triggerCaption(e) {
    var caption = $(e).find('.contact-caption');
    if (caption.hasClass('hidden')) {
        caption.removeClass('hidden');
    } else {
        caption.addClass('hidden');
    }
}