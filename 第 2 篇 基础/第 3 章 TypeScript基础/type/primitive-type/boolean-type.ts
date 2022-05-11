var b: boolean; //指定类型
var yes = true; //等同于 yes:boolean = true
var no = false; //等同于 no：boolean = false
console.log("b type is:" + typeof b); // undefined
console.log("b type is:" + typeof yes); // boolean
console.log("b type is:" + typeof no); // boolean
b = false; //赋值
console.log("b type is:" + typeof b); // boolean
