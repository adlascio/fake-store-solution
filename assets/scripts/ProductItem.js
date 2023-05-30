import { Product } from "./Product.js";

export class ProductItem extends Product {
  addToCart() {
    console.log("prod", this.product);
  }

  render() {
    const li = document.createElement("li");
    // li.className = "product-item";
    li.classList.add("product-item");
    li.innerHTML = `<div>
      <img
        src="${this.product.img}"
        alt="${this.product.title}"
      />
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>`;
    return li;
  }
}
