// МАСИВЫ-------------------------------------
// const cars = ['a', 's', 'd'];
// узнать длинну
// console.log(cars.length - 1);
// вызвать в масиве любой елемент
// console.log(cars[1]);
// заменить в новом масиве любой элемент
// cars[0] = 'qwer';
// console.log(cars);

// Примитивы и сложные типы 
// let a = 100;
// let b = a;
// console.log(a);
// console.log(b);

// a = 50;

// console.log(a);
// console.log(b);

// let a = [1, 2, 3];
// let b = a;
// console.log(a);
// console.log(b);
// a[0] = 357;
// console.log(a);
// console.log(b);

// ПЕРЕБОР МАСИВА---------------------------------------------
// const cards = [2, 32, 56, 43, 12, 43,100];
// let total = 0;
// for (let i = 0; i < cards.length; i += 1){
//     console.log(cards[i]);
//     total += cards[i];
// }
// for ( const cart of cards) {
//     total += cart;
// }


// console.log('total', total);
// Обьекты---------------------------------------------------
// const feedback = {
//     name:'Отзывы о компании',
//     good: 5,
//     neutral: 10,
//     bad: 3,
//     tracks:['Трек №1','Трек №2','Трек №3'],


// }
// let totalFeedback = 0;

// feedback.qwe = 15;
// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//  }
// const newName = 'neutral';
// console.log(feedback[newName]);
// console.log(feedback.good);
// console.log(feedback.bad);

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log('totalFeedback', totalFeedback);

// const fn = function () {
//     console.log('HELLO!!!');
// }
// console.log(fn);

// console.log(feedback);
// feedback.chageName('ОТЗЫВЫ');
// // console.log(feedback);
// feedback.neutral = 15555;
// // console.log(feedback);
// feedback.addTrack ('Трек № 356345');
// // console.log(feedback);
// console.log(feedback);

// let name = 'Roman';
// console.log(name);
// // alert(name);
// console.log('Мое имя', name);


// const clients = ['Mango', 'Poly', 'Ajax'];

// Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// clients[0] = 'Макарена';
// console.log(clients);
// console.log(clients[0]); // 'Макарена'
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax
// for (let i = 0; i < clients.length; i += 1){
//     console.log( clients[i]);

// }

// const numbers = [];

// for (let i = 0; i <= 3; i += 1){
//     numbers.push(`Число - ${i}`);
// }
// console.log('Добавили числа в масив', numbers);

// Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const cars = ['audi', 'bmw', 'renault'];

// for (const car of cars) {
//     console.log(car);
// }

// const string = 'Гиперболоид';

// for (const haracter of string) {
//     console.log(haracter);
// }


// Инструкции break и continue Будем искать имя клиента в массиве имен, если нашли - прервем цикл, так как нет смысла искать дальше, имена у нас уникальные.

// const cars = ['audi', 'bmw', 'renault'];
// const carsNameToFind = 'renault'
// let message;

// for (let car of cars) {
//     if (car === carsNameToFind) {
//         message = 'Такая машина в базе данных присутствует!';
//         break;
//     }
//     else {
//         message = 'Извените но данной марки у нас нет!';
//     }
// }
// console.log(message);
// const cars = ['audi', 'bmw', 'renault'];
// const carsNameToFind = 'renat'
// let message = 'Извените но данной марки у нас нет!';

// for (let car of cars) {
//     if (car === carsNameToFind) {
//         message = 'Такая машина в базе данных присутствует!';
//         break;
//     }
// }
// console.log(message);
// *
//  * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
//  * и управление передаётся на следующую итерацию.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < threshold) {
//         continue
//     }
//     console.log(`Число ${threshold} меньше числа ${numbers[i]}`);
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
// //   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     // console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a = 15;
// console.log(a);
// console.log(b);

// const a = [10, 20,30];
// const b = a;
// console.log(a);
// console.log(b);
// a[0] = 125;
// console.log(a);
// console.log(b);
// b[0] = 354;
// console.log(a);
// console.log(b);


// split(s) — позволяет превратить строку в массив, разбив ее по разделителю s. Это не метод массива, но рассматриваем мы его сейчас, так как раньше мы о массивах не знали.

// join(s) — делает в точности противоположное split. Он берет массив и склеивает его в строку, используя s как разделитель.
// const message = 'Привет этот удивительный мир JS';

// console.log(message.split(' '));

// const cars = ['audi', 'bmw', 'renault'];
// console.log(cars.join('__'));
// console.log(cars.join('-'));
// console.log(cars.join('='));
// console.log(cars.join('+'));
// console.log(cars.pop(0));
// console.log(cars);

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice());

// const add = function (a,b,d) {
//     return (a + b + d);

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1,2); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(); // countFrom = 0, countTo = 10, step = 1

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
// Пиши код выше этой строки
// };

// Функции----------------------------------------------
// const greet = function greet(name,lastName,city) {
//   console.log('Hello - ', name, lastName,city);
// }
// greet('Roman', 'Sokurenko', 'Krivbass');

// const sum =(a=5, b=45) => a + b;

// console.log(sum());

// const fn = function (fn) {
//   console.log()
// }

// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3,676)); //  6
// // console.log(sum(1, 2, 3, 4)); //  10
// // console.log(sum(1, 2, 3, 4, 5)); //  15

// const add = function (a, b, c,f) {
//    const rezult = a + b + c+f;
//    console.log(a);
//    console.log(b);
//   console.log(c);
//    console.log('Работает функия add')
//  return rezult;
// }
// const r1 = add(1, 2, 3,54,);
// console.log(r1);

// add(1,2,3);
// add(4,5,6);
// add(7,8,9);
// add(10, 11, 23);


// const dateOfBirth = function (thisYear,yearOfBirth) {
//   const result = thisYear - yearOfBirth;
//   return result;

// }
// const date = dateOfBirth(2021, 2016);
// console.log('Мне сейчас - ', date, 'лет.');

// const years = function (age) {
//   if (age >= 18) {
//     return 'Вы взрослый человек'
//   }
//   else{ return'Вы ребенок'}
// }

// const message = years(date)
// console.log(message);
// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// /* Вызываем функцию greet 
//    и выводим результат в консоль */
// console.log(greet('Манго'));
// // Добро пожаловать Манго.

// /* Выводим функцию greet 
//    в консоль не вызывая её */
// console.log(greet);
// /*
// ƒ greet() {
//      return `Добро пожаловать ${name}.`;
// }
// */