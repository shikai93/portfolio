$( window ).load(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        $('.img-left-overlay').attr('src','img/arduinoandpen-phone.jpg');
    }
});