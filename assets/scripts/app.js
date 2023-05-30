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
