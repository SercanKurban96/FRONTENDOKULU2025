//Local Storage

// let userName = "Sercan";
// localStorage.setItem("userName", userName); //setItem ile veri ekleme
// let localUserName = localStorage.getItem("userName");
// console.log("localUserName", localUserName);

// let yas = 29;
// localStorage.setItem("yas", yas); //number türündeki veriyi stringe çevirme
// let localYas = Number(localStorage.getItem("yas"));
// console.log("localYas:", localYas);
// console.log("type of localYas:", typeof localYas); //number

// let user = {
//     name: "Sercan",
//     age: 29,
//     city: "İstanbul",
//     lang: ["C++","Java","JavaScript"],
// };
// localStorage.setItem("user",JSON.stringify(user));
// let localUser = JSON.parse(localStorage.getItem("user"));
// console.log("localUser:", localUser);
// console.log("type of localUser:", typeof localUser); //object

// let users = [
//     { name: "Sercan", age: 29},
//     { name: "Ahmet", age: 28},
//     { name: "Yusuf", age: 27},
// ];
// localStorage.setItem("users",JSON.stringify(users));
// let localUsers = JSON.parse(localStorage.getItem("users"));
// console.log("localUsers:", localUsers);
// console.log("type of localUsers:", typeof localUsers); //object
// localUsers.map((user) => document.writeln(`<p>${user.name}</p>`));

//Session Storage
// let users = [
//     { name: "Sercan", age: 29},
//     { name: "Ahmet", age: 28},
//     { name: "Yusuf", age: 27},
// ];
// sessionStorage.setItem("users",JSON.stringify(users));
// let sessionUsers = JSON.parse(sessionStorage.getItem("users"));
// console.log("sessionUsers:", sessionUsers);
// console.log("type of sessionUsers:", typeof sessionUsers); //object
// sessionUsers.map((user) => document.writeln(`<p>${user.name}</p>`));

//Spread Operator (...)
// const langs = ["C++", "Java", "JavaScript", "Python"];
// const numbers = [1, 2, 3, 4, 5];
// let sonuc;
// sonuc = [...langs, ...numbers] //iki arrayi birleştirir
// sonuc = [...langs, "C#", "Go"]; //arrayin sonuna eleman ekler
// console.log(sonuc);

//Destructing
// let user = {
//     name: "Sercan",
//     age: 29,
//     city: "İstanbul",
//     lang: ["C++","Java","JavaScript"],
// };
// let {name, age, ...geriKalanlar} = user;
// console.log(name, age, geriKalanlar);

const langs = ["C++", "Java", "JavaScript", "Python"];
let [lang1, lang2, ...geriKalanlar] = langs;
console.log(lang1, lang2, geriKalanlar);