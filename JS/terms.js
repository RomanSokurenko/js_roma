// console.log(555);

//Прототипы обьектов
// const objc = {
//     z: 5
// };
// console.log('objc',objc);

// const objb = Object.create(objc);
// objb.y = 10;

// console.log('objb',objb);
// // console.log(objb.y);
// // console.log(objc.z);

// const obja = Object.create(objb);
// obja.x = 100;
// console.log('obja',obja);
// console.log(obja.z = 1000);

// const dammyObj = {
//     message: 'Это собственное свойство обьекта'
// };
// console.log(dammyObj.message);

// const dammyObj = Object.create({ message:'Прототипное наследование обьектов'});
// dammyObj.message = 'Это собственные свойства'
// console.log(dammyObj.message);
// console.log([]);
// Функция конструктор 

// const Car = function ({ auto, model, prise }={}) {

//    console.log(this) 
    // this.auto = auto;
    // this.model = model;
    // this.prise = prise;

    // так делать не надо---------  this.changePrice = function (newPrice) {
    //     this.prise = newPrice;
    // };
// };

// Car.prototype.sayHi = function () {
    // console.log(this);
    // console.log('HELLO')    
// };
// Car.prototype.changePrice = function (newPrice) {
//     this.prise = newPrice;
// }
// const myCar = new Car({
//     auto: 'BMW',
//     model: 'X5',
//     prise: 38000
// });
// console.log(myCar.prise);
// myCar.prise = 50000;
// console.log(myCar);
// myCar.sayHi();


// const myCar2 = new Car('AUDI', 'Q8', 100000);
// console.log(myCar2);

// const myCar3 = new Car('Renaut', 'Duster', 18000);
// console.log(myCar3);

// console.log(myCar);
// const User = function ({email,password}={}) {
//     this.email = email;
//     this.password = password;
// };
// User.prototype.changeMail = function (newMail) {
//     this.email = newMail;
// }
// User.prototype.changePassword = function (newPassword) {
//     this.password = newPassword;
// }

// const roman = new User({ email: 'Roman.sokurenko82@gmail.com', password: 11111111 })

// console.log(roman);
// roman.changePassword  (88888888);
// console.log(roman.password);


// КЛАССЫ---------------
class Car {
    constructor() {
        
    }
};

console.log(Car);

const myCar = new Car({
auto: 'BMW',
model: 'X5',
prise: 38000 
}
);

console.log(myCar);