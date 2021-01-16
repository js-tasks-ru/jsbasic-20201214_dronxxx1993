import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.container = null;
    this.render();
  }

  _createCard() {
    return `
        <div class="card">
          <div class="card__top">
            <img src="../../assets/images/products/${this.product.image}" class="card__image" alt="product">
            <span class="card__price">€${this.product.price.toFixed(2)}</span>
          </div>
          <div class="card__body">
            <div class="card__title">${this.product.name}</div>
            <button type="button" class="card__button" data-id = ${this.product.id}>
              <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `;
  }

  get elem() {
    return this.container;
  }

  render() {
    this.container = createElement(this._createCard(this.product));
    this.listener();
  }

  listener() {

    this.container.querySelector('.card__button').addEventListener('click', (event) => {
      const customEvent = new CustomEvent("product-add", {
        detail: event.currentTarget.dataset.id,
        bubbles: true
      });
      this.elem.dispatchEvent(customEvent);
    });

    this.elem.addEventListener("product-add", (e) => {
      console.log(e.detail);
    });
  }


}
