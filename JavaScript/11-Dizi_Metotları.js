const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);   //array.fill(value, start, end)



const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// true

console.log(pets.includes('at'));
// false - çünkü at ifadesi cat içinde geçsede bu metod tam eşleşme arar





const array = ['pro', 'to', 'turk'];

console.log(array.join());
// çıktı: "pro,to,turk"

console.log(array.join(''));
// çıktı: "prototurk"

console.log(array.join('-'));
// çıktı: "pro-to-turk"



const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();    // Son elemanı siler






try {
    adddlert("Welcome");    // alert
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.name + "<br>" + err.message;
  }