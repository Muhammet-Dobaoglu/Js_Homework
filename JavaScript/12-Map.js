let numbers = [1, 4, 9]
let roots = numbers.map(num => Math.sqrt(num));

console.log(roots); // [1, 2, 3]
console.log(numbers); // [1, 4, 9]




let dizi = [1, 4, 9]

dizi.forEach( (number,index) => { dizi[index] = dizi[index] * 2;} )

console.log(dizi);




let dizi2 = [1, 4, 9]
let result = numbers.map( function(x) { return x * 2;} );

console.log(dizi2); // [1, 4, 9]
console.log(result); // [2, 8, 18]





const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);





