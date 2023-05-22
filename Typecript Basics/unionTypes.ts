let empId: number | string = 334;

empId = "anirudh";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let anirudh: User | Admin = { name: "anirudh", id: 779 };

anirudh = { username: "anirudh", id: 779 };

export {};
