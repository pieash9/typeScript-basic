//  built in data type: number, string, boolean, void, undefined
var id = ["pieash"];
var userId;
var fname;
var lname;
var isActivated;
userId = 101;
fname = "pieash";
lname = " khan";
isActivated = true;
var fullName = fname.concat(lname);
console.log("Your id is ".concat(userId, " , your name is ").concat(fullName, " and account is ").concat(isActivated));
console.log(fullName.toUpperCase());
var displayName = function () {
    console.log("Hello world");
};
displayName();
