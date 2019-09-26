const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);

  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("Calculate half of 120 should return 60", () => {
    expect(utils.makeHalfPrice(120)).toBe(60);
  });
});

describe("utils.countBooks", () => {
  test("This should return the number of books to be 5", () => {
    expect(utils.countBooks(["Lost", "Found","Unsure","May Be", "Definately"])).toBe(5);
  });
});

describe("utils.isInStock",() => {
  test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 9
  }
  expect(utils.isInStock(book)).toBe(true);
});
});

describe("utils.isInStock",() => {
  test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 0
  }
  expect(utils.isInStock(book)).toBe(false);
});
});

describe("utils.getTotalOrderPrice", () => {
  test("returns 43.2  when passed 2 books at £18", () => {
    expect(utils.getTotalOrderPrice(18,2)).toBe(43.2);
  });

  test("returns 96  when passed 10 books at £8", () => {
    expect(utils.getTotalOrderPrice(8,10)).toBe(96);
  });
});