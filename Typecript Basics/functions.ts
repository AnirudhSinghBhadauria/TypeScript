function add(number: number) {
  return number + 2;
}

const toUpper = (input: string) => {
  return input.toUpperCase();
};

const signUpUser = (
  name: string,
  email: string,
  age: number,
  isPaid: boolean = true
): string => {
  return name + email + age;
};

const heros = ["ironman", "thor", "batman"];

heros.map((hero): string => {
  return `Look its, ${hero}!`;
});

const errorMessage = (error: string):void => {
     console.log(error);
}

const errorHandeler = (error: string):never => {
     throw new Error(error)
}

add(2);
toUpper("anirudh");
