let value;

const numbers = [43,56,33,23,44,34,5];

// const nuber = new Array(1,2,3,4,5,6,7,8);
const langs = ["python","java","c++","JS"];
const a = ["Merhaba",22,null,undefined,3.14];

//UZUNLUK
value = numbers.length;

//INDEKSLEME
value = numbers[0];
value = numbers[numbers.length -1];

//Herhangi bir Indeksteki değeri değiştirme
numbers[2] = 1000;
value = numbers;

//INDEX OF
value = numbers.indexOf(1000);

//Arrayin sonuna değer ekleme - PUSH
numbers.push(2999);
value = numbers;

//Arrayin sonuna değer ekleme - UNSHİFT
numbers.unshift(3999);
value = numbers;

//Arrayin sonundan değer atma - POP
numbers.pop();
value = numbers;

//Arrayin başından değer atma - SHİFT
numbers.shift();
value=numbers;

//Belli indexten belli indexe atma - SPLİCE
numbers.splice(0,3)
value = numbers;

//Arrayi ters çevirme - REVERSE
numbers.reverse();
value = numbers;

//arraylardaki sayılari sıralar büyükse ilk karakterlerini sıralar
value = numbers.sort();
value = numbers;




console.log(value);