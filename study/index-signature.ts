// index signature(インデックスシグネチャ)

export type User = {
  name: string;
  // index signatureの構文
  [key: string]: string;
  // [aaa: string]: string; keyの部分は何でもいい
}

const user: User = {
  name: "タロウ",
  // [key: string]: string;でerrorがなくなる
  account: "taro",
  // 追加もできる
  job: "Engineer",
}
