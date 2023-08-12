//  built in data type: number, string, boolean, void, undefined
let id = ["pieash"];

let userId: number;
let fname: string;
let lname: string;
let isActivated: boolean;

userId = 101;
fname = "pieash";
lname = " khan";
isActivated = true;

let fullName = fname.concat(lname);

console.log(
  `Your id is ${userId} , your name is ${fullName} and account is ${isActivated}`
);

console.log(fullName.toUpperCase());

const displayName = (): void => {
  console.log("Hello world");
};
displayName();
