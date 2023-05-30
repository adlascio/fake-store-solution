import { ProductItem } from "./ProductItem.js";

export class ProductList {
  constructor() {
    this.products = [];
  }
  fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        for (const prod of data) {
          const newProductItem = new ProductItem(prod);
          //   console.log("prod", newProductItem);
          this.products.push(newProductItem);
        }
        this.render();
      });
  }
  render() {
    const ul = document.createElement("ul");
    ul.classList.add("product-list");

    this.products.forEach((product) => {
      const productLi = product.render();
      //   console.log("li", productLi);
      ul.append(productLi);
    });
    const app = document.getElementById("app");
    app.append(ul);
  }
}
