(function ($) {
    "use strict";

    var body = $('body');
    var windowWidth = $( window ).width();
    
    // 1.0  Testimonial Carousel 
    $('.testimonial_carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
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
    });

    // 2.0 Partner Carousel
    $('.partner_carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:true,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // 3.0 Revolution Main Slider
    $('.fullwidthbanner').show().revolution({
        delay:16000,
        startwidth:1170,
        startheight:950,
        hideThumbs:200,
        thumbWidth:100,                            
        thumbHeight:50,
        thumbAmount:5,
        touchenabled:"on",                      
        onHoverStop:"on",                        
        navOffsetHorizontal:0,
        navOffsetVertical:20,
        navigationType:false,
        navigationArrows:"nexttobullets",
        navigationStyle:"preview4",	
        shadow:0,
        fullWidth:"on",
        fullScreen:"on",
    });

    // 4.0 Sticky
    $(".header-area").sticky({topSpacing:0});

    // 5.0 Portfolio Work Mixitup
    $('#content').mixItUp();

    // 6.0 jQuery counter
    $('.counter').counterUp({
        delay: 50,
        time: 3000
    });

    // 7.0 Venobox
    $('.lightbox ').venobox({
        numeratio: true,
        infinigall: true
    });

    // 8.0 Jquery Scroll Spay
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 76
    });

    // 9.0 Jquery Smooth Scroll
    $('.smoth-scroll a').bind('click',function (event) {
        var $anchor = $(this);
        var headerH = '74';
        $('html, body').stop().animate({
             scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    // 10.0 Menu Close Button
    $('.menuCloseBtn').on('click', function(){
        $(this).toggleClass('Cross');
        body.toggleClass('menuEffect');
    });
    $('.navbar-toggle').on('click', function(){
        body.toggleClass('menuEffect');
    });
    if( windowWidth < 768 ){
        $('ul#nav li a').on('click', function(){
            $('#bs-example-navbar-collapse-1').toggleClass('in');
            body.toggleClass('menuEffect');
        });
    }
    
    // 12.0 Related Post Carousel
    $('.related-post-slider').owlCarousel({
        loop:true,/*
        autoplay:true,*/
        nav:true,
        navText: ['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
        margin: 30,
        responsive:{
           /* 0:{
                items:1
            },*/
             300:{
                items:1
            },
            480:{
                items:2
            },
            767:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // 13.0 Demo Color Box
    var colorTrigger = $('.colorDemo ul li');
    var colorBox = $('.colorDemo')
    colorTrigger.on('click', function(){
        var body = $('body');
        var CCcolor = $(this).data('color');
        var colorList = colorTrigger.map(function() {
            return $(this).data('color');
        }).get();
        colorList = colorList.join(' ');
        body.removeClass( colorList );
        body.addClass( CCcolor );
        colorTrigger.removeClass('active');
        $(this).addClass('active');
    });
    $('.colorDemo > i.icon-tools-2').on('click', function(){
        colorBox.toggleClass('open');
    });

    // 14.0 ColorBox Time Out
    setTimeout(function(){
        colorBox.toggleClass('open');
    }, 10);

    // 15.0 Service Middle Content
    var serviceFigure = $('#services-area figure');
    var serviceFigureHeight = serviceFigure.width();
    serviceFigure.css('height', serviceFigureHeight);
    
    // 16.0 Preloader active code
    $(window).load(function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    
})(jQuery);