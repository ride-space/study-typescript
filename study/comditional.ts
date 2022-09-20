// conditional type は型の条件分岐を行い型推論を行うためのもの

export type Props = {
  id: string;
  name: string;
  age:number;
}

type FilterString<T> = {
  [K in keyof T]: T[K] extends string ? K :never;
}[keyof T];

// type Propsのstringであるid,nameが入る
type StringKeys = FilterString<Props>

type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K :never;
}[keyof T];

type StringKey = Filter<Props, string>;
type NumberKey = Filter<Props, number>;
type BooleanKey = Filter<Props, boolean>;



