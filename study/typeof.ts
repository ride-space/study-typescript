
// 下記のようにfooの型と同じ型を定義できる。
export let foo: number;

type Foo = typeof foo;

const num: Foo = 123;


// constで定義するとリテラル型にもなる
const bar = 124

type num2 = typeof bar

// リテラル型と型アノテーションは型アノテーションが優先される
const foobar:number = 123;

const FooBar = typeof foobar

// use case
export const budle = (x: string | number) => {

  // 条件式でstringのxを絞り込む
  if (typeof x === "string") {
    // Number()でnumberにしてから計算
    return Number(x) * 2;
  }
  return x * 2;
}
