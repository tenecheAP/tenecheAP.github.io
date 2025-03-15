$(document).ready(function() {
    // Carrusel
    let currentSlide = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;

    // Crear dots para navegación
    const dotsContainer = $(".dots");
    slides.each((index) => {
        dotsContainer.append(`<div class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></div>`);
    });

    function showSlide(index) {
        slides.removeClass("active");
        $(".dot").removeClass("active");
        
        slides.eq(index).addClass("active");
        $(`.dot[data-slide="${index}"]`).addClass("active");
    }

    // Navegación con flechas
    $(".next").click(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    $(".prev").click(function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // Navegación con dots
    $(".dot").click(function() {
        currentSlide = parseInt($(this).data("slide"));
        showSlide(currentSlide);
    });

    // Auto-play del carrusel
    let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    // Pausar auto-play al hover
    $(".carrusel").hover(
        function() { clearInterval(slideInterval); },
        function() {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            }, 5000);
        }
    );

    // Menús móviles
    $(".mobile-toggle").click(function() {
        const parent = $(this).closest(".mobile-collapsible");
        
        // Si el elemento clickeado no está activo, cerramos todos los demás
        if (!parent.hasClass("active")) {
            $(".mobile-collapsible.active").removeClass("active");
        }
        
        parent.toggleClass("active");
    });

    // Smooth scroll para enlaces de navegación
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Activar/desactivar clase active en menú al scroll
    $(window).scroll(function() {
        const scrollPosition = $(this).scrollTop();

        $('section[id]').each(function() {
            const target = $(this);
            const targetTop = target.offset().top - 100;
            const targetBottom = targetTop + target.outerHeight();

            if (scrollPosition >= targetTop && scrollPosition <= targetBottom) {
                $('.menu a').removeClass('active');
                $(`.menu a[href="#${target.attr('id')}"]`).addClass('active');
            }
        });
    });

    // Mostrar/ocultar botón de scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
});