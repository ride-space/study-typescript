// keyof のサンプル

// export type Obj = {
//   foo: string;
//   bar: number;
// };

// type Key = keyof Obj;

// const key: Key = "bar";

// export const Obj = {
//   foo: "foo",
//   bar: "bar"
// };

// type Obj = typeof Obj;
// type Key = keyof Obj;
//上二つを合わせた形になっている。

// type Key = keyof typeof Obj;
// const key: Key = "bar";

export const Obj = {
  foo: "foo",
  111: "bar"
}

type Key = keyof typeof Obj;

function test (x: Key): void {
  return;
}

test(111);
