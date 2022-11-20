const numbers = [5,12,8,130,44]

console.log(numbers.find(x => x > 10))





const users = [{id:1, name:"A"},{id:2, name:"B"},{id:3, name:"C"}]

console.log(users.find(x => x.id === 1));



const ages = [3, 10, 18, 20,21];

document.getElementById("demo").innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age > 18; 
}