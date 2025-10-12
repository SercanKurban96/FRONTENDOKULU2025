// MÜLAKAT ÖRNEĞİ 1
// console.log("one");
// setTimeout(function(){
//     console.log("two");
// }, 0);
// console.log("three");

// MÜLAKAT ÖRNEĞİ 2
// var foo = { n: 1 };
// var bar = foo;
// foo.x = foo = { n: 2 };
// console.log(foo.x);

// MÜLAKAT ÖRNEĞİ 3
// var x = 500;
// let y, z, p, q;
// q = 200;
// if (true) {
//   q = y = z = p = x;
//   document.getElementById("display").innerHTML =
//     "x: " + x + " y: " + y + " z: " + z + " p: " + p + " q: " + q;
// }

// MÜLAKAT ÖRNEĞİ 4
// let c = {greeting: "Hey!"};
// let d;
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

//var ile let arasındaki en az iki fark nedir?
//1- var function scope'a sahiptir, let ise block scope'a sahiptir.
//2- var ile tanımlanan değişkenler hoisting'e tabidir, let ile tanımlananlar ise hoisting'e tabi değildir ve tanımlanmadan önce erişilmeye çalışılırsa ReferenceError hatası verir.