function initCarousel() {

  const wrapperCarousel = document.querySelector('.carousel__inner');
  const btnPrev = document.querySelector('.carousel__arrow_left');
  const btnNext = document.querySelector('.carousel__arrow_right');

  const widthSlide = wrapperCarousel.offsetWidth;

  let position = 0;
  const carouselLength = document.querySelectorAll('.carousel__slide').length;
  const widthWrapper = (carouselLength - 1) * widthSlide;

  const transformElement = (widthTransform) => {
    position += widthTransform;

    wrapperCarousel.style.transform = `translateX(${position}px)`;
    checkPosition();
  };

  btnNext.addEventListener('click', ()=>{
    transformElement(-widthSlide);
  });

  btnPrev.addEventListener('click', ()=>{
    transformElement(widthSlide);
  });

  const checkPosition = () => {
    if (position >= 0) {
      btnPrev.style.display = 'none';
    } else {
      btnPrev.style.display = 'block';
    }

    if (Math.abs(position) >= widthWrapper) {
      btnNext.style.display = 'none';
    } else {
      btnNext.style.display = 'block';
    }

  };

  checkPosition();
}
