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

    // Variables para el swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Modificar el auto-play para que sea más rápido en móvil
    const autoPlayInterval = window.innerWidth < 768 ? 3000 : 5000;
    
    // Actualizar el intervalo inicial
    let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, autoPlayInterval);

    // Eventos touch para el swipe
    $(".carrusel").on('touchstart', function(e) {
        touchStartX = e.originalEvent.touches[0].clientX;
    });

    $(".carrusel").on('touchend', function(e) {
        touchEndX = e.originalEvent.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // Mínima distancia para considerar un swipe
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe derecha - slide anterior
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            } else {
                // Swipe izquierda - siguiente slide
                currentSlide = (currentSlide + 1) % totalSlides;
            }
            showSlide(currentSlide);
        }
    }

    // Actualizar el hover para usar el nuevo intervalo
    $(".carrusel").hover(
        function() { clearInterval(slideInterval); },
        function() {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            }, autoPlayInterval);
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
