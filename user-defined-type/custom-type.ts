type User = { name: string; age: number };

let users: User[];
users = [{ name: "Khan", age: 23 }];

let user1: User;
user1 = { name: "pieash", age: 18 };

users.push(user1);

let user2: User;
user2 = { name: "rihan", age: 29 };

users.push(user2);

for (const key in users) {
//   console.log(users[key]["name"]);
}
// console.log(users);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET"

const requestHandler = (requestType: RequestType)=>{
    console.log(requestType)
}
requestHandler("GET")