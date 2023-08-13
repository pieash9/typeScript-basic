var User = /** @class */ (function () {
    function User(userName, age) {
        (this.userName = userName), (this.age = age);
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("pieash", 12);
user1.display();
//  class object
// user1 - name: pieash, age:32
// user2 - name: khan, age:16
var user2 = new User("Khan", 2);
user2.display();
