let x = "Ali Veli"
let y = "Sinema,Spor,Tiyatro"



val = x.toUpperCase();
val = x.toLowerCase();
val = x.substring(0,5); // 0-5 arasını alır
val = x.indexOf("a");  // a karakterini arar yoksa -1 döndürür
val = x.replace("a","b");
val = x.trim(); // başındaki ve sonundaki boşlukları siler
val = y.split(","); // , lerden ayırır dizi yapar.


val = `my name is ${x} dsfsdf ${y}`
console.log(val);


val = 10>5? "Doğru" : "Yanlış"