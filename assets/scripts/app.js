import { ProductList } from "./ProductList.js";
import { ShoppingCart } from "./ShoppingCart.js";

const prodList = new ProductList();
prodList.fetchProducts();

const cart = new ShoppingCart();
cart.render();
console.log("total", cart.total);
