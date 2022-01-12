// Mapped Types(マップドタイプ)

export type User = {
  name: string;
} & PersonalData;

type PersonalData = {
  // height: number;
  // weight: number;
  [K in "height" | "weight"]: number; // Mapped Types
};

type OptionalPersonalData = {
  [K in keyof PersonalData]?: PersonalData[K];
}

const user: User = {
  name: "タロウ",
  height: 170,
  weight: 60,
}
