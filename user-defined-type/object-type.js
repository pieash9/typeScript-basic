var users;
users = [{ name: "Khan", age: 23 }];
var user1;
user1 = { name: "pieash", age: 18 };
users.push(user1);
for (var key in users) {
    console.log(users[key]["name"]);
}
console.log(users);
