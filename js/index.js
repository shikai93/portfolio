window.setInterval(animateTurtle, 500);
var image= $('#animate');
var frame = 0;
function animateTurtle() {
    if (frame === 0) {
        image.attr("src", "img/turtle2.1.png");
        frame = 1;
    } else if (frame == 1) {
        image.attr("src", "img/turtle2.2.png");
        frame = 2;        
    } else if (frame == 2) {
        image.attr("src", "img/turtle2.1.png");
        frame = 3;
    } else {
        image.attr("src", "img/turtle2.0.png");
        frame = 0;        
    }
}