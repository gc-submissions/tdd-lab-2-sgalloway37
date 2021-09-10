const { Product } = require("./Product.js");
class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    const newProduct = new Product(product.name, product.price, product.taxable);
    this.items.push(newProduct);
  }

  getItemCount() {
    return this.items.length;
  }

  getTotalBeforeTax() {
    let total = 0;
    this.items.forEach((element) => {
      total += element.price;
    });
    return total;
  }

  getTotalWithTax() {
    let total = 0;
    this.items.forEach((element) => {
      total += element.getPriceWithTax();
    });
    return total;
  }

  getTax(){
      return this.getTotalWithTax() - this.getTotalBeforeTax();
  }
}

module.exports = { Cart };
