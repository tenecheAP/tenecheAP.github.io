$(document).ready(function() {
    // Cache de selectores DOM frecuentemente usados
    const $carrusel = $(".carrusel");
    const $slides = $(".slide");
    const $dots = $(".dots");
    const totalSlides = $slides.length;
    let currentSlide = 0;
    let slideInterval;
    let touchStartX = 0;
    let touchEndX = 0;

    // Configuración
    const CONFIG = {
        autoPlayInterval: window.innerWidth < 768 ? 3000 : 5000,
        swipeThreshold: 50,
        scrollOffset: 70,
        scrollTopShowButton: 300,
        scrollMenuOffset: 100
    };

    // Inicialización del carrusel
    const initCarousel = () => {
        $slides.each((index) => {
            $dots.append(`<div class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></div>`);
        });
        startAutoPlay();
    };

    // Función mejorada para mostrar slides
    const showSlide = (index) => {
        $slides.removeClass("active").eq(index).addClass("active");
        $(".dot").removeClass("active").filter(`[data-slide="${index}"]`).addClass("active");
    };

    // Control del autoplay
    const startAutoPlay = () => {
        stopAutoPlay();
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }, CONFIG.autoPlayInterval);
    };

    const stopAutoPlay = () => {
        clearInterval(slideInterval);
    };

    // Manejo de eventos touch
    const handleSwipe = () => {
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > CONFIG.swipeThreshold) {
            currentSlide = (currentSlide + (swipeDistance > 0 ? -1 : 1) + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }
    };

    // Event Listeners
    $(".next").on('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    $(".prev").on('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    $(".dot").on('click', function() {
        currentSlide = parseInt($(this).data("slide"));
        showSlide(currentSlide);
    });

    // Eventos touch
    $carrusel
        .on('touchstart', (e) => touchStartX = e.originalEvent.touches[0].clientX)
        .on('touchend', (e) => {
            touchEndX = e.originalEvent.changedTouches[0].clientX;
            handleSwipe();
        })
        .hover(stopAutoPlay, startAutoPlay);

    // Navegación móvil
    $(".mobile-toggle").on('click', function() {
        const $parent = $(this).closest(".mobile-collapsible");
        if (!$parent.hasClass("active")) {
            $(".mobile-collapsible.active").removeClass("active");
        }
        $parent.toggleClass("active");
    });

    // Smooth scroll mejorado
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const $target = $($(this).attr('href'));
        
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - CONFIG.scrollOffset
            }, 1000);
        }
    });

    // Manejo del scroll con throttle
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    $(window).on('scroll', throttle(function() {
        const scrollPosition = $(this).scrollTop();

        // Actualizar menú activo
        $('section[id]').each(function() {
            const $target = $(this);
            const targetTop = $target.offset().top - CONFIG.scrollMenuOffset;
            const targetBottom = targetTop + $target.outerHeight();

            if (scrollPosition >= targetTop && scrollPosition <= targetBottom) {
                $('.menu a').removeClass('active');
                $(`.menu a[href="#${$target.attr('id')}"]`).addClass('active');
            }
        });

        // Toggle botón scroll-to-top
        $('.scroll-to-top').toggle(scrollPosition > CONFIG.scrollTopShowButton);
    }, 100));

    // Inicializar carrusel
    initCarousel();
});
