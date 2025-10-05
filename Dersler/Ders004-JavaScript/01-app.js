// JavaScript Başlangıç

//********************Tek Satır Yorum********************
//console.log("Merhaba AcademyClub");

//********************Çoklu Satır Yorum********************
/*
console.log("Merhaba AcademyClub");
console.log("Merhaba AcademyClub");
console.log("Merhaba AcademyClub");
console.log("Merhaba AcademyClub");
*/


//********************Değişkenler********************
// a = 10;
// console.log(a);

// var a = 10;
// console.log(a);

// let b = 20;
// b = 25;
// console.log(b);

// const c = 30;
// c = 35; // Hata verir, değiştiremeyiz.
// console.log(c);


//********************Veri Tipleri********************
//String
// var userName = "Sercan Kurban";
// console.log(userName);
// console.log(typeof userName);

//Number
// var age = 29;
// console.log(age);
// console.log(typeof age);

//Otomatik Tip Dönüşümü
// var firstNumber = 20;
// var secondNumber = "30";
// var result = firstNumber + secondNumber;
// var result = firstNumber - secondNumber;
// console.log(result);
// console.log(typeof result);

//Hoisting
// var firstNumber;
// console.log(firstNumber);
// firstNumber = 20;
// deneme();
// function deneme(){
//     console.log("Deneme fonksiyonu çalıştı.");
// }

//Boolean
// var isActive = true;
// console.log(isActive);
// console.log(typeof isActive);
// console.log(2 == "2");
// console.log(2 === "2");

//Undefined - Değeri Atanmamış
// var userName;
// console.log(userName);
// console.log(typeof userName);

//Null - Değeri Boş
// var userName = null;
// console.log(userName);
// console.log(typeof userName);

//Object
// var user = {
//     name: "Sercan Kurban",
//     age: 29,
//     isActive: true,
//     notlar: {matematik: 70, tarih: 80, ingilizce: 90},
//     verileriGoster: function(){
//         console.log("Fonksiyon çalıştı.");
//     },
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.age);
// user.verileriGoster();

//Array
// var names = ["Sercan","Ahmet","Yusuf","Yeliz"];
// console.log(names);
// console.log(typeof names);
// console.log(names[0]);
// console.log(names.length);

//Fonksiyonlar
// function merhaba(){
//     console.log("Merhaba AcademyClub");
// }
// merhaba();
// console.log(merhaba);
// console.log(typeof merhaba);

//Date Objesi
// var date = new Date();
// console.log(date);
// console.log(typeof date);
// console.log(date.getDate());
// console.log(date.getDay());

//Örnek 1
// var a = 10;
// var b = a;
// console.log("1- ", a , b);
// a = 20;
// console.log("2- ", a , b);

//Örnek 2
// var a = [10];
// var b = a;
// console.log("1- ", a , b);
// a = [20];
// console.log("2- ", a , b);
// console.log("3- ", a * b);

//Örnek 3
// var a = [10, 20, 30, 40, 50];
// var b = a;
// console.log("1- ", a , b);
// a[0] = 60;
// a.push(60);
// console.log("2- ", a , b);