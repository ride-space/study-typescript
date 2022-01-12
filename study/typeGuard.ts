export const foo = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value;
  }
  return value;
};

export const Bar = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value;
  }
  return value;
};

export const option = (value?: string) => {
  if (!value) {
    return value;
  }
  return value;
};

// タグ付きunion types
type UserA = {
  name: string;
  lang: "ja";
};

type UserB = {
  name: string;
  lang: "en";
};

type UserC = {
  name: string;
  lang: "fr";
};

// switch文で絞り込む
export const Names = (value: UserA | UserB | UserC): unknown => {
  switch (value.lang) {
    case "ja": {
      return value;
    }
    case "en": {
      return value;
    }
    case "fr": {
      return value;
    }
    // never型(到達することはないとなる)
    default: {
      // よくerrorの処理を書くことが多い
      throw Error("lang is not defined");
    }
  }
};

const User = [
  { name: "たなか", lang: "ja"},
  { name: "たなか", lang: "ja"},
  { name: "zyoni", lang: "en"},
]

const Users = (User: UserA | UserB) => {
  if (User.lang) {
    return User.lang === "ja";
  }
  return User;
}

const UserData = async () => {
  const res = await fetch("");
  const json = await res.json();
  Users(json)
}
