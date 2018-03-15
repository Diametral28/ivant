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
    function openMenu(){
        $(this).toggleClass('Cross');
        body.toggleClass('menuEffect');
    }
    if( windowWidth > 768 ){
        openMenu();
    }
    $('.menuCloseBtn').on('click', function(){
        openMenu();
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
    
    // Blog 28
    var blog = document.getElementById("blog28");
    var blogm = document.getElementById("blog-men");
    if( windowWidth < 768 ){ 
       blog.style.display = "none";
       blogm.style.display = "block";
    }else{
        blog.style.display = "block";
        blogm.style.display = "none";
    }
    // Servicios
    /*$( "#div-servicios" ).hover(  function() {
             $('#h2pru').animateCss('bounce');
  }
     
    );*/

    $('#videoVivens').on('click',function (event) {
        console.log("play");
        var video = $("#audio");
        videoPlay(video);
    });

    function videoPlay(video){
        document.getElementById('audio').play();
        //video.play();
    }

//----- Servicvios ------
    $('.serviciosA').on('click', function(){
        //openMenu();
        var servicio = $(this).attr("data-servicio");
        var titulo = $("#tituloServicio");
        var contenido = $("#contenidoServicio");
        var img = $("#imgModal");
        var src ="";

        console.log(servicio);
        switch(servicio){
            case "branding": 
                titulo.text("BRANDING.MARKETING GLOBAL.MODELOS COMERCIALES");
                contenido.text("Creamos y desarrollamos la identidad de tu marca mediante consultoría e implementación de modelos de negocio integrando las mejores herramientas de comunicación y desarrollo comercial para lograr objetivos específicos. Desarrollamos conceptos creativos alineados a tu estrategia comercial.");
                src = $("#img-branding").attr("src");
                img.attr('src', src);
                console.log(src);
                break;
            case "socialMedia": 
                titulo.text("SOCIAL MEDIA");
                contenido.text("STe conectamos al mundo. Mostramos lo que te hace único con estrategias de comunicación y elementos estratégicamente seleccionados creando contenido de valor para posicionar tu marca logrando resultados traducidos a ventas ");
                src = $("#img-social").attr("src");
                img.attr('src', src);
                console.log(src);
                break;
            case "posicionamiento": 
                titulo.text("POSICIONAMIENTO DIGITAL");
                contenido.text("Analizamos más que palabras, desarrollamos modelos comerciales basados en métricas y lenguajes de negocio que llevan tu marca al lugar indicado.");
                src = $("#img-posicionamientod").attr("src");
                img.attr('src', src);
                console.log(src);
                break;
            case "diseno": 
                titulo.text("DISEÑO & DESARROLLO WEB");
                contenido.text("Diseñamos y desarrollamos la atmosfera correcta para gestionar tu negocio on line bajo una arquitectura comercial que te ayuda a gestionar cada variable de negocio para tu marca.");
                src = $("#img-diseno").attr("src");
                img.attr('src', src);
                console.log(src);
                break;
            case "comunicacionVisual": 
                titulo.text("COMUNICACIÓN VISUAL");
                contenido.text("Mediante el análisis y diseño de la información, creamos conceptos creativos desarrollando atmósferas de impacto visual que generan resultados cuantitativos.");
                src = $("#img-comunicacionv").attr("src");
                img.attr('src', src);
                console.log(src);
                break;
            case "comunicacionContenido": 
                titulo.text("DESARROLLO DE CONTENIDO");
                contenido.text("Comunicamos el valor de tus proyectos.");
                src = $("#img-comunicacionc").attr("src");
                img.attr('src', src);
                console.log(src);
                break;
            case "marketing": 
                titulo.text("MARKETING AUTOMOTRIZ");
                contenido.text("Somos un equipo especializado en desarrollar y diseñar proyectos de comunicación y capacitación para la industria automotriz; desarrollamos de punta a punta lanzamientos de nuevos modelos, performance driving, driving tranning enfocados en una sola variable, generar la mejor experiencia de tu cliente final.");
                src = $("#img-marketing").attr("src");
                img.attr('src', src);
                console.log(src);
                break;
            case "photography": 
                titulo.text("PHOTOGRAPHY");
                contenido.text("Las verdaderas campañas son para toda la vida… Y eso es lo que logramos con cada fotografía creada por Diametral28; desarrollamos proyectos de comunicación visual que nos permiten conectar con las emociones de tus clientes.");
                src = $("#img-photo").attr("src");
                img.attr('src', src);
                console.log(src);
                break;

        }
        

    });

})(jQuery);