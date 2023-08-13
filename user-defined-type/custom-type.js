var users;
users = [{ name: "Khan", age: 23 }];
var user1;
user1 = { name: "pieash", age: 18 };
users.push(user1);
var user2;
user2 = { name: "rihan", age: 29 };
users.push(user2);
for (var key in users) {
    //   console.log(users[key]["name"]);
}
var getRequest;
getRequest = "GET";
var requestHandler = function (requestType) {
    console.log(requestType);
};
requestHandler("GET");
