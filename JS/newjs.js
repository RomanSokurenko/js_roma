// console.log('Hello Roman', "new",357);
// let a = 10;
// console.log(a);
// a = 20;
// console.log(a);
// a = 'Cars 42';
// console.log(a);
// const message = "Привет как дела???"
// console.log(message.length);
// console.log(message.slice(8));
// console.log('jhgfd' > 5);
// if (5) {
//     console.log('если да')
// }
// else { console.log('если нет') };

// for (let i = 0; i <= 5; i += 1){
//     console.log(i);
// }

// const min = 1;
// const max = 10;
// let total = 0;

// for (let i = min; i <=max; i += 1){
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log('данное число не четное', i);
//         continue;
// }
//     console.log('данное число четное ', i);
//     total += i;
// }
// console.log('total',total);

// const age = 2;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const citys  = ['Киев', 'Днепр', 'Кривой Рог', 'Вознесенск'];
// console.log(city.length);
// console.log(city);

// for (let i = 0; i <= city.length - 1; i += 1){
//   city[i] += '-1';
//   console.log(city[i]);
// }

// for (let city of citys) {
//   console.log(city);
// }

// const carts = [1, 5, 10, 10, 10, 10, 10];
// let total = 0;

// for (let i = 0; i < carts.length; i+=1){
  
//   total += carts[i];
// }
// console.log('Total:', total);

// const carts = [1, 1, 1, 1, 10, 10, 10];
// let total = 0;

// for (let i = 0; i < carts.length; i += 1){
//   total += carts[i];
// }
// console.log('Total =', total);

// for (let cart of carts) {
//   total += cart;
// }
// console.log('Total = ', total);

// const numbers = [54, 4, 12, 14, 857, 1, 6, 8, 4, 5, 2]
// let total = 0;

// // for (let i = 0; i < numbers.length; i += 1){
// //   console.log(numbers[i])
// //   if (numbers[i] % 2 === 0) {
// //     total += numbers[i];
// //     console.log('Данное число четнои и мы считаем его сумму')
// //   }
// //   else { console.log('Число не четное!!!') };
// // }
// // console.log('Total = ', total);

// const numbers = [54, 5, 122, 14, 857, 1, 6, 8, 4, 5, 2]
//  let total = 0;

// for (let number of numbers) {
//   // console.log(number);

//   if (number % 2 === 0) {
//     console.log('Четное!!!')
//     total += number
//       ;  }
// }
// console.log('Total = ', total);

// const logins = ['dog', 'boy', 'betjman', 'supermen'];
// const loginToFind = 'betman';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     // console.log('пользователь :', logins[i])
    
//     if (login === loginToFind) {
//         console.log('Ура !нашли!!!');
//         message = (`Пользователь ${loginToFind} найден`);
//         break;
//     }
// }
// console.log(message);
// let includens=(logins === loginToFind) ? `Пользователь ${loginToFind} не найден`  : `Пользователь ${loginToFind} найден` ;
// console.log(includens);

// const logins = ['dog', 'boy', 'betman', 'supermen'];
// const loginToFind = 'betman';
// let message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;
// console.log(message);

// const numbers = [54, 1, 78, 41, 2, 65, 8, 4, 26];
// let smallNumbers = numbers[0];

// for (let number of numbers) {
//     if (number < smallNumbers) {
//         smallNumbers = number;
//     }
// }
// console.log(smallNumbers);
// const add = function (a, b) {
//     const result = a + b;

//     return result;
    // console.log(a);
    // console.log(b);
    // console.log('Выполняется функция add')
// }
// const r1 = add(12, 32);
// console.log(r1);
// add(5,6);
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];

// const xx = a.concat(b, c);
// console.log(xx);

// const xxx = [...a, ...b, ...c];
// console.log(xxx);

// const a = { x: 1, y: 2 };
// const b = { c: 2, n: 4 };
// console.log(a, b);

// const c = {
//     ...a,
//     ...b,
// };
// console.log(c);

// const car = {
//     engine: 'dizel',
//     doors: 5,
//     engineVolume: 1.5,
//     music: {
//         columns: 12,
//         name: 'sony',
//         model:'itr-f-43-d'
//     }
// }
// console.log(car);
// const { engine, doors,engineVolume,music:{columns,name,model}} = car;

// console.log(doors,name,engine); 

// const authors = {
//     kiwi: 3,
//     ajax: 4,
//     poly: 1,
//     den: 9,
// };
// const rating = Object.values(authors);
// console.log(Math.max(...rating));

// const cars = ['bmw', 'opel', 'renaut', 'mersedes','жигули']
//  const clientCar = 'жигули';

//   const message = 'Это ваш автомобиль';
// for (let  car of cars) {
//     // console.log(car);
     
//     if (car === clientCar) {
      
//         return messege;
//     }

//     else { return 'это не Ваше авто' };
// }

const fna = function (message,callback) {
    console.log(message);
    console.log(callback);
    callback();
};
const fnb = function () {console.log('это лог который передается через функцию fnb!!!') };


fna('это что передаем в функцию',fnb);

