//Shamelessly stolen from https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
//Tweaked to handle abs-position objects
//All thanks to Marius Craciunoiu

var didScroll;
var lastScrollTop = 0;
var delta = 50;
var navbarHeight = $('navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('navbar').removeClass('nav-down').addClass('nav-up');
        $('navextlink').removeClass('extlink-bold').addClass('extlink-subtle');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('navbar').removeClass('nav-up').addClass('nav-down');
	        $('navextlink').removeClass('extlink-subtle').addClass('extlink-bold');
        }
    }
    
    lastScrollTop = st;
}