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

//Scope - Kapsam
// var a = 10; //Global Scope
// function deneme(){
//     var b = 20; //Function Scope
//     c = 30; //Global Scope (Hata vermez ama kullanılması önerilmez.)
//     console.log(a);
//     console.log(b);
// }
// deneme();
// console.log(a);
// console.log(b); //Fonksiyon içerisinde olduğu için global alanda çalıştığında hata verecektir.
// console.log(c);

//Örnek Scope
// if(true){
//     var a = 10; //Function Scope
//     let b = 20; //Block Scope
//     const c = 30; //Block Scope
// }
// console.log(a);
// console.log(b);
// console.log(c);

//********************Tip Dönüşümleri********************
// var a = 10;
// console.log(a, typeof a);
// var b = "20";
// console.log(b, typeof b);
// b = "Sercan10";
// var sonuc = String(a);
// var sonuc = Number(b);
// console.log(sonuc, typeof(sonuc));

//Örnek
// var a = 5 + "2";
// console.log(a, typeof a);
// var a = 5 - "2";
// console.log(a, typeof a);

//********************Operatörler********************
//Atama Operatörleri (=)
// var a = 10;

//Aritmetik Operatörler (+, -, *, /, %, **)
// console.log(5 + 2); //Toplama
// console.log(5 - 2); //Çıkarma
// console.log(5 * 2); //Çarpma
// console.log(5 / 2); //Bölme
// console.log(5 % 2); //Mod Alma
// console.log(5 ** 2); //Üslü

//Karşılaştırma Operatörleri (==, ===, !=, !==, >, <, >=, <=)
// console.log(2 == "2") //Değer Karşılaştırması
// console.log(2 === "2") //Hem Değer Hem De Tip Karşılaştırması
// console.log(2 != "2") //Değer Karşılaştırması - Eşit Değil
// console.log(2 !== "2") //Hem Değer Hem De Tip Karşılaştırması Eşit Değil
// console.log(2 > "2") //Büyük
// console.log(2 < "2") //Küçük
// console.log(2 >= "2") //Büyük Eşit
// console.log(2 <= "2") //Küçük Eşit

//Math Fonksiyonu
// let sonuc;
// sonuc = Math.PI;
// sonuc = Math.round(3.6);
// sonuc = Math.ceil(3.2);
// sonuc = Math.floor(3.8);
// sonuc = Math.sqrt(16);
// sonuc = Math.floor(Math.random() * 100 + 1) // 0-100 arası rastgele sayı üretir.
// sonuc = Math.random();
// console.log(sonuc);

//String Metotları
// let value;
// const firstName = "Sercan";
// const lastName = "Kurban";
// const city = "İstanbul";
// const age = 29;

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;
// value = firstName.length; // ismin kaç harf olduğunu gösterir
// value = firstName.toLocaleLowerCase(); // tüm harfleri küçük harfe çevirir
// value = firstName.toLocaleUpperCase(); // tüm harfleri büyük harfe çevirir
// value = firstName[0]; // ismin ilk indeksi hariç harf sayısını gösterir
// value = firstName[firstName.length - 1]; // ismin son harfini gösterir
// value = firstName.indexOf("a"); // a harfini içerip içermediğini kontrol etme
// value = firstName.includes("a"); // a harfini içerip içermediğini kontrol etme (true - false)
// value = firstName.concat(" ", lastName,  " ", city); // birleştirme işlemi yapar
// value = firstName.slice(0, 3); // 0'ıncı karakterden itibaren 3 karaktere kadar al (3 dahil değil)
// console.log(value);

// value =
//   "İsim: " +
//   firstName +
//   "\nSoyisim: " +
//   lastName +
//   "\nŞehir: " +
//   city +
//   "\nYaş: " +
//   age;
// console.log(value);

//Template Literals
// `` = İşaretin Kısayolu: (ALT GR + Enter'in üzerindeki virgül olana 2 defa basın)
// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Şehir: ${city}
// Yaş: ${age}
// `;
// console.log(value);

//********************Array Metotları********************
// const langs = ["Python", "Java", "C++", "JavaScript"];
// const numbers = [3, 5, 2, 10, 15, 7];
// let value;
// value = langs.length; //Eleman sayısı
// value = langs[0]; //İlk eleman
// value = langs[langs.length - 1]; //Son eleman
// value = langs.indexOf("Java"); //Elemanın indeksi
// value = langs.includes("Python"); //Eleman var mı?
// value = langs.push("C#"); //Sona eleman ekler
// value = langs.unshift("Ruby"); //Başa eleman ekler
// value = langs.pop(); //Sondaki elemanı siler
// value = langs.shift(); //Baştaki elemanı siler
// value = langs.reverse(); //Diziyi ters çevirir
// value = langs.sort(); //Diziyi alfabetik sıralar
// value = numbers.sort(); //Diziyi alfabetik sıralar
// value = numbers.sort(function(a, b){
//     return a - b; //Küçükten büyüğe sıralar
// });
// value = numbers.sort(function(a, b){
//     return b - a; //Büyükten küçüğe sıralar
// });

// console.log(numbers);
// console.log(langs);
// console.log(value);
