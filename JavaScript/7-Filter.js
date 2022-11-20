function bul(value) 
  {
    return value > 10;
  }
  
  const x = [12, 5, 8, 130, 44].filter(bul);
  console.log(x);








const y = [12, 5, 8, 130, 44].filter(value => value > 10);
console.log(y);









const users = [
	{
		name: "Tayfun Erbilen",
		age: 27
	},
	{
		name: "Mehmet Seven",
		age: 27
	},
	{
		name: "Batuhan Aydın",
		age: 28
	}
];



const z = users.filter(user => user.age === 27);
console.log(z);










const Names = ['Tayfun', 'tarkan', 'tufan', 'mehmet', 'ahmet', 'hayko'];

const search = p => Names.filter(name => name.includes(p));

console.log(search('ay'));





