let names = ["A","B","C"]
let numbers = [1,2,3]

names.push("D"); // Dizinin sonuna ekler
names.unshift("D"); // Dizinin ilk elemanına ekler

names.pop() // Son elemanı siler
names.shift() // İlk elemanı siler

names.splice(0,1) // o. indexten itibaren 1 eleman siler

let val = names.concat(numbers) // Dizileri birleştirir








		
var dizi = [
    {meyve: "elma", mevsim: "yaz"},
    {meyve: "armut", mevsim: "yaz"},
    {meyve: "mandalina", mevsim: "kış"},
];


var x = dizi.filter(
    
    function(x)
     {
        if(x.mevsim == "yaz")
        { return true;}
     }
                               );

x.forEach(function(y){
    document.write(y.meyve);
    document.write("<br>");
});



