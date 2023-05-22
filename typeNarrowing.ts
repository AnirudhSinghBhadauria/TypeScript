// const detectType = (value: number | string) => {
//      if(typeof value === 'string') {
//           return value.toLowerCase();
//      }

//      return value + 3;
// }

interface normalUser {
  name: string;
  email: string;
}

interface Admin extends User {
  isAdmin: boolean;
}

const isAdmin = (account: normalUser | Admin) => {
  if ("isAdmin" in account) {
    return account.isAdmin;
  } else {
    return "User Account";
  }
};

const today = new Date();

const dateChecker = (value: string | Date) => {
  if (value instanceof Date) {
    return value.toLocaleString();
  } else {
    return value.toLowerCase();
  }
};

interface circle {
  kind: "circle";
  radius: number;
}

interface square {
  kind: "square";
  side: number;
}

interface triangle {
  kind: "triangle";
  side: number;
}

type Shape = circle | square | triangle;

const getTrueShape = (value: Shape) => {
  if (value.kind === "square") {
    return value.side * value.side;
  } else if (value.kind === "circle") {
    return 3.14 * value.radius * value.radius;
  }
  return 0.5 * value.side;
};

const getArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return 3.14 * shape.radius * shape.radius;

    case "square":
      return shape.side * shape.side;

    case "triangle":
      return 0.5 * shape.side;

    default:
      const _decidableShape: never = shape;
      return _decidableShape;
  }
};
