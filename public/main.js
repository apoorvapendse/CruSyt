//dark mode toggle and animation

(function ($) {
    "use strict";

    //Switch dark/light

    $(".switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $(".switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $(".switch").addClass("switched");
        }
    });

    $(document).ready(function () {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })


    });

})(jQuery);

// home page animation function
var fullAnimation = (function () {

    var bigDarkRectangle = anime.timeline({
        targets: '.hero-figure-box-05',
        autoplay: false,
        begin: function (anim) {
            smallDarkRectangles.play()
            colouredRectangles.play()
        }
    }).add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: '500px'
    }).add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: 1
    }).add({
        duration: 800,
        rotateY: '-15deg',
        rotateX: '8deg',
        rotateZ: '-1deg'
    })

    var smallDarkRectangles = anime.timeline({
        targets: '.hero-figure-box-06, .hero-figure-box-07',
        autoplay: false
    }).add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: '500px',
    }).add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: 1
    }).add({
        duration: 800,
        rotateZ: '20deg'
    })

    var colouredRectangles = anime.timeline({
        targets: '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10',
        autoplay: false
    }).add({
        duration: anime.random(600, 800),
        delay: anime.random(600, 800),
        rotate: [anime.random(-360, 360), function (el) { return el.getAttribute('data-rotation') }],
        scale: [0.7, 1],
        opacity: [0, 1],
        easing: 'easeInOutExpo'
    })

    function init() {
        setTimeout(function () {
            bigDarkRectangle.play()
        }, 1000)
    }

    function restart() {
        bigDarkRectangle.restart()
        smallDarkRectangles.restart()
        colouredRectangles.restart()
    }

    function seek() {
        bigDarkRectangle.seek(bigDarkRectangle.duration * (seekProgressEl.value / 100))
        smallDarkRectangles.seek(smallDarkRectangles.duration * (seekProgressEl.value / 100))
        colouredRectangles.seek(colouredRectangles.duration * (seekProgressEl.value / 100))
    }

    return {
        init: init,
        restart: restart,
        seek: seek
    }
})()

// Start on load
window.onload = function () {
    fullAnimation.init()
}

// Re-run
document.getElementById('run-trigger').addEventListener('click', function (e) {
    fullAnimation.restart()
})

// Seek
var seekProgressEl = document.querySelector('.progress');
seekProgressEl.addEventListener('input', function () {
    fullAnimation.seek()
})

//footer
function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY >= heightFooter) {
        $('footer').css({
            'bottom': '0px'
        });
    }
    else {
        $('footer').css({
            'bottom': '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function () {
    var windowHeight = $(window).height(),
        footerHeight = $('footer').height(),
        heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height': heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height': windowHeight + 'px',
        'line-height': windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top': windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function () {
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top': '-' + scroll + 'px'
        });

        $('header').css({
            'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});