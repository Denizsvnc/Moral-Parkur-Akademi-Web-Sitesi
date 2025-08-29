document.addEventListener('DOMContentLoaded', function () {
    // slide fonnksiyonlari
    let currentSlide = 0;
    const totalSlides = 3;

    function goToSlide(index) {
        currentSlide = index;
        document.getElementById('sliderTrack').style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    function previousSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    function updateDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.getElementById(`dot${i}`);
            if (i === currentSlide) {
                dot.classList.add('bg-orange-500');
                dot.classList.remove('bg-white/50');
            } else {
                dot.classList.remove('bg-orange-500');
                dot.classList.add('bg-white/50');
            }
        }
    }

    // Auto-play slider
    setInterval(nextSlide, 5000);
    updateDots();

    // Mobile Menu Toggle
    window.toggleMenu = function () {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('hidden');
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // yukari cikma butonu
    window.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }



    window.addEventListener('scroll', function () {
        const backToTopButton = document.getElementById('backToTop');
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0');
            backToTopButton.classList.add('opacity-100');
        } else {
            backToTopButton.classList.add('opacity-0');
            backToTopButton.classList.remove('opacity-100');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.addEventListener('DOMContentLoaded', function () {
        // Observe all animated elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .bounce-in').forEach(el => {
            observer.observe(el);
        });

        // Counter Animation
        const counters = document.querySelectorAll('[data-counter]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-counter'));
            let current = 0;
            const increment = target / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 50);
        });
    });

    // Form Submit Handler
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Form animation
        const button = e.target.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;

        button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>GÖNDERILIYOR...';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check mr-2"></i>GÖNDERILDI!';
            button.classList.add('bg-green-500');

            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                button.classList.remove('bg-green-500');
                e.target.reset();
            }, 2000);
        }, 2000);
    });

    // Parallax Effect
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Dynamic Background Particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'fixed w-1 h-1 bg-orange-500 rounded-full opacity-20 pointer-events-none';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '100vh';
        particle.style.animation = `particleFloat ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
            @keyframes particleFloat {
                to {
                    transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);

    // Create particles periodically
    setInterval(createParticle, 800);

    // Loading Animation
    window.addEventListener('load', function () {
        document.body.classList.add('fade-in');
    });


});
