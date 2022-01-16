export type Foo<T extends string | number = string> = {
  value: T;
};

const foo: Foo = {
  value: "",
}

// extendsでnumberをいれるとerrorにならない
const bar: Foo<number> = {
  value: 123,
}

// これがextendsの使い方
