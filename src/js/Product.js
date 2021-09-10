class Product {
  constructor(name, price, taxable) {
    this.name = name;
    this.price = price;
    this.taxable = taxable;
  }

  getPriceWithTax() {
    if (this.taxable) {
      return this.price * 1.1;
    } else {
      return this.price;
    }
  }
}

module.exports = { Product };
