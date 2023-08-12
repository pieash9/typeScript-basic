let users: object[];
users = [{ name: "Khan", age: 23 }];

let user1: { name: string; age?: number };
user1 = { name: "pieash", age: 18 };

users.push(user1);

for (const key in users) {
  console.log(users[key]["name"]);
}
console.log(users);
