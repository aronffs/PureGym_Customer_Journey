document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach((carouselContainer, index) => {
    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    const prevBtn = carouselContainer.querySelector('.carousel-btn-prev');
    const nextBtn = carouselContainer.querySelector('.carousel-btn-next');
    const carousel = carouselContainer.querySelector('.carousel');
    let currentSlide = 0;
    
    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
      });
    }
    
    if (prevBtn && nextBtn && slides.length > 0) {
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
  });
});