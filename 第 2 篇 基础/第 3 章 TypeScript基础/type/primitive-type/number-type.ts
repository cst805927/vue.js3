var x: number; // 指定类型
var y = 0; // 等同于 y: number = 0
var z = 123.456; // 等同于 z:number = 123.456
var s = z.toFixed(2); // 使用了Number接口属性
console.log(typeof x); // undefined
console.log(typeof y); // number
console.log(typeof z); // number
console.log(typeof s); // string
