const { Product } = require("../src/js/Product.js");

describe("Product", () => {
  test("sets props on class", () => {
    expect(new Product("Salena", 23.99, true)).toEqual({ name: "Salena", price: 23.99, taxable: true});
    expect(new Product("Conner", 43.98, false)).toEqual({ name: "Conner", price: 43.98, taxable: false});
  });

  test("taxable product", () => {
    const productWithTax = new Product('shirt',50,true);
    const productWithTax2 = new Product('jeans',75,true);
    expect(productWithTax.getPriceWithTax()).toBeCloseTo(55);
    expect(productWithTax2.getPriceWithTax()).toBeCloseTo(82.5);
  });

  test("non-taxable product", () => {
    const productWithTax = new Product('shirt',50,false);
    const productWithTax2 = new Product('jeans',75,false);
    expect(productWithTax.getPriceWithTax()).toBe(50);
    expect(productWithTax2.getPriceWithTax()).toBe(75);
  });

});
