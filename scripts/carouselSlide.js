      const slides = document.querySelectorAll('.carousel-slide');
      const prevBtn = document.querySelector('.carousel-btn-prev');
      const nextBtn = document.querySelector('.carousel-btn-next');
      let currentSlide = 0;
      
      function showSlide(idx) {
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === idx);
        });
      }
      
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
        });
        nextBtn.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        });
        
        // Mobile swipe support
        let startX = 0;
        const carousel = document.querySelector('.carousel');
        if (carousel) {
          carousel.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
          });
          carousel.addEventListener('touchend', e => {
            let dx = e.changedTouches[0].clientX - startX;
            if (dx > 50) prevBtn.click();
            else if(dx < -50) nextBtn.click();
          });
        }
      }