// 関数でジェネリクスを使う場合は引数の()の前に<>を書く

// 関数
function foo<T>(arg: T) {
  return { value: arg };
}

// Arrow関数
const bar = <K>(num: K) => {
  return { id: num };
};

// 使用例
const foo1 = foo<string>("test");
const foo2 = foo<boolean>(true);
const foo3 = foo<number>(2);
const foo4 = foo<string[]>(["test", "test2"]);

// 暗黙的な型推論
// errorにならない
const bar1 = bar("");
const bar2 = bar(1);
const bar3 = bar(false);

//Nullable(ヌラブル):nullになりうる値
const bar4 = bar<string | null>("");

// extends型制約

// extendsを記載するとstringのメゾットがつかえる
const test = <K extends string>(num: K) => {
  num.toUpperCase();
  return { id: num };
};

// extendsを記載するとstringのメゾットがつかえる
const test2 = <K extends string | number>(num: K) => {
  // numberの可能性があるのでerrorになる
  //num.toUpperCase();
  //型ガードを使う
  if (typeof num === "string") {
    num.toUpperCase();
    return;
  }
  // stringが上でガードされたため、下ではnumber型のメゾットが使える
  num.valueOf();
  return { id: num };
};
