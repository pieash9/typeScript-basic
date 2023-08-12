// enum:  store constants - duplicate value is not allowed here.

// enum type: numeric, string, heterogenous
// numeric
enum RequestType {
  readData = 1,
  getData = 3,
  deleteData,
}
// console.log(RequestType["readData"]);

// string
enum readData {
  readData = "READ_DATA",
  getData = "GET_DATA",
}

console.log(readData["readData"]);

// heterogenous
enum readData3 {
  readData = "READ_DATA",
  getData = "GET_DATA",
  id = 5,
}
console.log(readData3["id"])