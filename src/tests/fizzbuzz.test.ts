import { fizzBuzz } from "../fizzbuzz";

describe("FizzBuzz should", () => {
  it("return number one as a string for number one", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("return number two as a string for number two", () => {
    expect(fizzBuzz(2)).toBe("2");
  });

  it("return 'Fizz' for number three", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("return 'Buzz' for number five", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("return 'FizzBuzz' for number fifteen", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("returns 'Fizz' for any numbers divisible by three", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("returns 'Buzz' for any numbers divisible by five", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("returns 'FizzBuzz' for any numbers divisible by fifteen", () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it("returns the number as a string for any number that is not divisible by three or five", () => {
    expect(fizzBuzz(17)).toBe("17");
  });
});
