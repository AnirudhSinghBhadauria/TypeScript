// type User = {
//   name: string;
//   age: number;
//   isPaid: boolean;
// };

// const createUser = (user: User): User => {
//   return {
//     name: "anirudh",
//     age: 60,
//     isPaid: true,
//   };
// };


type User = {
     readonly _id: number;
     email: string; 
     isActive: boolean; 
     name?: string;
}


const userOne: User = {
     _id: 300,
     email: 'anirudh',
     isActive: true,
     // name: 'anirudh'
}



