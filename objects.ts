const user = {
  name: "anirudh",
  email: "mail@gmail.com",
  age: 66,
};

const getObject = ({ name: string, isPaid: boolean, age: number }) => {};

getObject({ name: "anirudh", isPaid: true, age: 50 });

const putObject = ({
  name: string,
  isPaid: boolean,
  age: number,
}): { name: string; age: number; paid: boolean } => {
  return { name: "anirudh", age: 5, paid: true };
};
