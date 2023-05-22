interface Office {
  name: string;
  phone: number;
  email: string;
}

// function identity<Type>(value: Type): Type {
//   return value;
// }

const identity = <Type>(value: Type): Type => {
  return value;
};

let Me = {
  name: "satish",
  phone: 90,
  email: "anirudh",
};

const products = <Type,>(value: Type[]): Type => {

     return value[2];
}

identity<Office>(Me);
