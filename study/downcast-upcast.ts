export const color = "red";

// リテラルタイプスなので下記はerror
color = "blue"

//  as "red"をつけることによりダウンキャストしリテラルタイプスになる
const theme = {
  color: "red",
  backgroundColor: "blue",
}as const;

// リテラル型なので下記のerrorがしっかりでる
// (property) color: "red"
//型 '"blue"' を型 '"red"' に割り当てることはできません。
theme.color = "blue";

// const foo: "foo" はリテラルタイプス
const foo = "foo";

//let xで定義しなおすとstring型になる
//let x: string
let x = foo;


export function getFirstLetter(str?: string) {
  // ! をつけて無理やりundefinedはないことにする
  return str!.charAt(0)
}

export function getFirstLetter2(str: number) {
  // charAt()はnumber型に使う関数なのでas stringでは互換性がないためerrorになる
  // errorの文:"型 'number' から型 'string' への変換は、互いに十分に重複できないため間違っている可能性があります。意図的にそうする場合は、まず式を 'unknown' に変換してください。"
  return (str as string).charAt(0)
}

export function getFirstLetter3(str: number) {
  //  as unknown as stringと二段階で変換することをDouble assertionという
  return (str as unknown as string).charAt(0)
}
