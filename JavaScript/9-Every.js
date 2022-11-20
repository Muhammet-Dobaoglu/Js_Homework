const ikiyeBolunebilir = (currentValue) => currentValue % 2 === 0;

const array1 = [2, 4, 6, 8, 10];

console.log(array1.every(ikiyeBolunebilir)); // Şartı kontrol ediyo. True Döndürür