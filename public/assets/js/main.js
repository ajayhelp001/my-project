$('.hero-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["<img class='left-side' src='assets/images/icon/left-arrow.svg'/>", "<img class='left-side' src='assets/images/icon/right-arrow.svg'/>"],
    autoHeight: false,
    smartSpeed: 3000,
    autoplay: true,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Header Js
$(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});


var toggler = document.querySelector('.navbar-toggler');
    toggler.addEventListener('click', function() {
    this.classList.toggle('active');
});

// Glightbox coll
var lightboxVideo = GLightbox({
    selector: '.glightbox3'
});

// Counters
let counterStarted = {};
window.addEventListener('scroll', function () {
    let countElements = document.querySelectorAll(".counters");
    let arr = Array.from(countElements);
    arr.forEach(function (item) {
        if (isElementInViewport(item) && !counterStarted[item.dataset.number]) {
            startCounter(item);
            counterStarted[item.dataset.number] = true;
        }
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startCounter(item) {
    let startNumber = 0;
    let increment = 20;
    let targetNumber = parseInt(item.dataset.number, 10);

    let stop = setInterval(function () {
        startNumber += increment;
        if (startNumber >= targetNumber) {
            startNumber = targetNumber;
            clearInterval(stop);
        }
        item.innerText = startNumber;
    }, 30); 
}


$('.brand-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    navText: ["<img class='left-side' src='assets/images/icon/left-arrow.svg'/>", "<img class='left-side' src='assets/images/icon/right-arrow.svg'/>"],
    autoHeight: false,
    smartSpeed: 10000,
    autoplay: true,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:3
        },
        1200:{
            items:4
        },
        1400:{
            items:5
        }
    }
})