export function fizzBuzz(number: number): string {
  function isDivisibleBy(divisor: number) {
    return number % divisor === 0;
  }
  if (isDivisibleBy(15)) {
    return "FizzBuzz";
  }
  if (isDivisibleBy(3)) {
    return "Fizz";
  }
  if (isDivisibleBy(5)) {
    return "Buzz";
  }

  return number.toString();
}
