export class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
    console.log("items", this.items);
  }

  get total() {
    return this.items.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  }

  render() {
    const section = document.createElement("section");
    section.classList.add("cart");
    section.innerHTML = `<h2>Total: $${this.total}</h2>
        <button>Order Now!</button>`;
    return section;
  }
}
