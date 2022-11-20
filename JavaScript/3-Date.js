let x = new Date()

console.log(x.getDate());
console.log(x.getDay());
console.log(x.getHours());
console.log(x.getMonth());


console.log(x.setDate(20));

let birthday = new Date(2000,01,01)

console.log(x.getFullYear()-birthday.getFullYear());


let birthday2 = new Date("8/3/1997")
var y = Date.now() - birthday2.getTime()
console.log(new Date(y).getFullYear() - 1970);


