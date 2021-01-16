import createElement from '../../assets/lib/create-element.js';

const _createContainerCard = () => {
  const div = document.createElement('div');
  div.classList.add('carousel');

  div.insertAdjacentHTML('beforeend',
    `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>`);

  return div;
};

const _createCardElement = (data = {}) => {
  console.log(data);
  const div = document.createElement('div');
  const _containerCard = _createContainerCard();
  div.classList.add('carousel__inner');

  data.map((item) => {
    div.insertAdjacentHTML('beforeend', `
    <div class="carousel__slide" >
        <img src="../../assets/images/carousel//${item.image}" class="card__image" alt="${item.name || 'product'}">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2) || 0}</span>
          <div class="carousel__title">${item.name || 'Неизвестное блюдо'}</div>
          <button type="button" class="carousel__button" data-id = ${item.id}>
            <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
    </div>
      `);
    return div;
  }).join('');
  _containerCard.append(div);

  return _containerCard;
};

export default class Carousel {
  constructor(slides) {
    this.DEFAULT_WIDTH = 980;
    this.DEFAULT_LENGTH = 3;

    this.slides = slides;
    this.container = null;
    this.containerTransition = null;
    this.position = 0;
    this.widthCarouselTransition = null;
    this.containerWidth = null;
    this._carouselContainer = null;
    this.carouselLength = null;
    this._buttonNext = null;
    this._buttonPrev = null;

    this.render();
    this.generateEventListener(this.container);
  }

  render() {
    this.container = _createCardElement(this.slides || {});
    this.containerTransition = this.container.querySelector('.carousel__inner');
  }


  get elem() {
    return this.container || createElement(`<h2>Неизвестная ошибка</h2>`);
  }

  carouselTransition() {
    this.containerTransition.style.transform = `translateX(${this.position}px)`;
  }

  checkPosition() {
    if (this.position >= 0) {
      this._buttonPrev.style.display = 'none';
    } else {
      this._buttonPrev.style.display = 'flex';
    }

    if (Math.abs(this.position) >= this.containerWidth) {
      this._buttonNext.style.display = 'none';
    } else {
      this._buttonNext.style.display = 'flex';
    }
  }

  generateEventListener(container) {
    this._buttonNext = container.querySelector('.carousel__arrow_right');
    this._buttonPrev = container.querySelector('.carousel__arrow_left');
    this._buttonAddToCart = container.querySelectorAll('.carousel__button');
    this.carouselLength = this.container.querySelectorAll('.carousel__slide').length ;

    this._buttonPrev.style.display = 'none';

    this._buttonNext.addEventListener('click', (event) => {

      if (!this.widthCarouselTransition) {
        this.widthCarouselTransition = document.querySelector('.carousel__inner').clientWidth;
        this.containerWidth = (this.carouselLength - 1) * this.widthCarouselTransition;
      }

      this.position -= this.widthCarouselTransition || this.DEFAULT_WIDTH;
      this.carouselTransition();
      this.checkPosition();
    });

    this._buttonPrev.addEventListener('click', (event) => {

      this.position += this.widthCarouselTransition || this.DEFAULT_WIDTH;
      this.carouselTransition();
      this.checkPosition();
    });

    this._buttonAddToCart.forEach(btn => {
      btn.addEventListener('click', (event) => {
        const events = new CustomEvent("product-add", {
          bubbles: true,
          detail: event.currentTarget.dataset.id,
        });
        this.elem.dispatchEvent(events);
      });
    });

    this.elem.addEventListener('product-add', (e) => {
      console.log(e.detail);
    });
  }

}
