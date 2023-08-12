// enum:  store constants - duplicate value is not allowed here.
// enum type: numeric, string, heterogenous
// numeric
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["getData"] = 3] = "getData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType["readData"]);
// string
var readData;
(function (readData) {
    readData["readData"] = "READ_DATA";
    readData["getData"] = "GET_DATA";
})(readData || (readData = {}));
console.log(readData["readData"]);
// heterogenous
var readData3;
(function (readData3) {
    readData3["readData"] = "READ_DATA";
    readData3["getData"] = "GET_DATA";
    readData3[readData3["id"] = 5] = "id";
})(readData3 || (readData3 = {}));
console.log(readData3["id"]);
