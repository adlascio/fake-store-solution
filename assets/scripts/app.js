class Product {
  constructor(id, title, price, description, img) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.img = img;
  }
}

const product = new Product(
  1,
  "Bag",
  100,
  "Nice bag",
  "https://img.fruugo.com/product/1/12/720071121_max.jpg"
);

console.log("prod", product);

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("prod", this.product);
  }

  render() {
    const li = document.createElement("li");
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

const productItem = new ProductItem(product);
console.log("li", productItem.render());
