const { Product } = require("../src/js/Product.js");
const { Cart } = require("../src/js/Cart.js");

describe("Cart", () => {
  // Test Case #1
  test("check for constructor", () => {
    expect(new Cart()).toEqual({ items: [] });
  });

  // Test Case #2
  test("check for 1 item added to array", () => {
    const product = new Product("shirt", 50, true);
    const cart = new Cart();
    cart.add(product);
    expect(cart.items).toEqual([{ name: "shirt", price: 50, taxable: true }]);
  });

  // Test Case #2
  test("check for 2 items added to array", () => {
    const product1 = new Product("shirt", 50, true);
    const product2 = new Product("jeans", 75, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    expect(cart.items).toEqual([
      { name: "shirt", price: 50, taxable: true },
      { name: "jeans", price: 75, taxable: false },
    ]);
  });

  // Test Case #3
  test("check for length of items in array", () => {
    const product1 = new Product("candy", 3.5, true);
    const product2 = new Product("gum", 2.25, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    expect(cart.getItemCount()).toBe(2);
  });

  // Test Case #4
  test("check for length of items in array", () => {
    const product1 = new Product("candy", 3.5, true);
    const product2 = new Product("gum", 2.25, false);
    const product3 = new Product("slurpee", 5.25, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    expect(cart.getItemCount()).toBe(3);
  });

  // Test Case #5
  test("check for total before tax", () => {
    const product1 = new Product("candy", 3.50, true);
    const product2 = new Product("gum", 2.25, false);
    const product3 = new Product("slurpee", 5.25, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    expect(cart.getTotalBeforeTax()).toBe(11);
  });

  // Test Case #6
  test("check for total before tax", () => {
    const product1 = new Product("earring", 15.23, true);
    const product2 = new Product("ring", 11.34, false);
    const product3 = new Product("braclet", 65.12, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    expect(cart.getTotalBeforeTax()).toBeCloseTo(91.69);
  });

  test("check for total with tax", () => {
    const product1 = new Product("earring", 15.23, true);
    const product2 = new Product("ring", 11.34, false);
    const product3 = new Product("braclet", 65.12, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    expect(cart.getTotalWithTax()).toBeCloseTo(99.73);
  });

  test("check for total with tax", () => {
    const product1 = new Product("fork", 35.24, false);
    const product2 = new Product("knife", 71.22, false);
    const product3 = new Product("spoon", 21.11, true);
    const product4 = new Product("cup", 43.17, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    cart.add(product4);
    expect(cart.getTotalWithTax()).toBeCloseTo(177.17);
  });

  test("check to get tax", () => {
    const product1 = new Product("fork", 35.24, false);
    const product2 = new Product("knife", 71.22, false);
    const product3 = new Product("spoon", 21.11, true);
    const product4 = new Product("cup", 43.17, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    cart.add(product4);
    expect(cart.getTax()).toBeCloseTo(6.43);
  });

  test("check to get tax", () => {
    const product1 = new Product("earring", 15.23, false);
    const product2 = new Product("ring", 11.34, false);
    const product3 = new Product("braclet", 65.12, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    expect(cart.getTax()).toBeCloseTo(6.51);
  });
});
