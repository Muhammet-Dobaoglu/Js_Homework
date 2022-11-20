let text = "";

function myFunction(item, index) {
  text = text + index + ": " + item + "<br>"; 
}

const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;     //<p id="demo"></p>







let toplam = 0;
const numbers = [65, 44, 12, 4];

function myFunction(x) {
  toplam += x;
}

numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = toplam; 








const dizi = ['item1', 'item2', 'item3']
const kopyadizi = []

// öncesi
for (let i = 0; i < dizi.length; i++) {
  kopyadizi.push(dizi[i])
}


// sonrası
dizi.forEach(function(x){
  kopyadizi.push(x)
})

// function fonk(x){
//     kopyadizi.push(x)
//   }
// dizi.forEach(fonk(x))





const array = ["Banana", "Orange", "Apple", "Mango"];

for (let x of array) {
  document.getElementById("demo").innerHTML += x + "<br>";
}






var sayi1 = prompt("Birinci sayıyı yazın");
var sayi2 = prompt("İkinci sayıyı yazın");
var sayi3 = prompt("Üçüncü sayıyı yazın");

var toplamı=Number(sayi1) + Number(sayi2) + Number(sayi3);

alert("girdiğiniz sayıların toplamı = "+toplamı);