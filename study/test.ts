export type Foo = {
  num: number;
}

const sum1: number = 10;
const sum2: number = 14;

const Sums = (num1: number, num2: number) => {
  return num1 * num2;
}

Sums(sum1, sum2);
