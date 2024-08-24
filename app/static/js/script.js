/* slider */
var percent_hours1 = $('.percent_hours1').text();
$({ numberValue: 0 }).animate({ numberValue: percent_hours1 }, {
    duration: 2000,
    easing: 'linear',
    progress: function () {
        $('.percent_hours1').text(Math.ceil(this.numberValue));
    }
});
var percent_hours2 = $('.percent_hours2').text();
$({ numberValue: 0 }).animate({ numberValue: percent_hours2 }, {
    duration: 2000,
    easing: 'linear',
    progress: function () {
        $('.percent_hours2').text(Math.ceil(this.numberValue * 10) / 10 + "%");
    }
});
var percent_hours3 = $('.percent_hours3').text();
$({ numberValue: 0 }).animate({ numberValue: percent_hours3 }, {
    duration: 2000,
    easing: 'linear',
    progress: function () {
        $('.percent_hours3').text(Math.ceil(this.numberValue) + "+");
    }
});
/* slider */


/*testimonials*/
$('.testimonials').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        767: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1400: {
            items: 3,
        }
    }
});
/*testimonials*/

/*video testimonials*/
$('.video-testimonials').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
       
        992: {
            items: 2,
        },
        1023: {
            items: 3,
        },
        1400: {
            items: 3,
        }
    }
});
/*video-testimonials*/


const mobile_icon = document.getElementById('mobile-icon');
const mobile_menu = document.getElementById('mobile-menu');
const hamburger_icon = document.querySelector("#mobile-icon i");

function openCloseMenu() {
  mobile_menu.classList.toggle('block');
  mobile_menu.classList.toggle('active');
}

function changeIcon(icon) {
  icon.classList.toggle("fa-xmark");
}

mobile_icon.addEventListener('click', openCloseMenu);

