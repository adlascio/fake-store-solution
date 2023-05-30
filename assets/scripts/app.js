import { ProductList } from "./ProductList.js";

// class Product {
//   constructor(id, title, price, description, img) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.img = img;
//   }
// }

// const product = new Product(
//   1,
//   "Bag",
//   100,
//   "Nice bag",
//   "https://img.fruugo.com/product/1/12/720071121_max.jpg"
// );

// console.log("prod", product);

class ProductItem {
  constructor(product) {
    this.product = new Product(
      product.id,
      product.title,
      product.price,
      product.description,
      product.image
    );
  }

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

// class ProductList {
//   constructor() {
//     this.products = [];
//   }
//   fetchProducts() {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log("data", data);
//         for (const prod of data) {
//           const newProductItem = new ProductItem(prod);
//           //   console.log("prod", newProductItem);
//           this.products.push(newProductItem);
//         }
//         this.render();
//       });
//   }
//   render() {
//     const ul = document.createElement("ul");
//     ul.classList.add("product-list");

//     this.products.forEach((product) => {
//       const productLi = product.render();
//       console.log("li", productLi);
//       ul.append(productLi);
//     });
//     const app = document.getElementById("app");
//     app.append(ul);
//   }
// }

const prodList = new ProductList();
prodList.fetchProducts();

// const productItem = new ProductItem(product);
// console.log("li", productItem.render());
