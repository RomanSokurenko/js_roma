// const name = 'Roman';
// const age = 38;



// console.log(`Мое имя ${name} мой возраст ${age}`);

// const person = ['Роман', 'Михаил', 'Тимур', 'Денис'];




// person[0] = `Иван`;
// console.log(person.length);
// console.log(person);

// let shou = confirm(`Продливаете подписку?`);

// console.log(shou);

// let quantity = prompt(`Введите количество товаров`);
// quantity = Number(quantity);
// console.log(quantity);



// parseInt  выводич число и останавливается на первом знакуе которое не число----------------------------------
// let element = `50px`;

// const result = Number.parseInt(element);

// console.log(result);

// let test = `154мм`;

// const res = Number.parseInt(test);

// console.log(res);

// toFixed   убтрает цыфры после запятой и оставляет то колличество которое указано в ( )

// let salary = 30000.1254;
// salary = Number(salary.toFixed(5));


// console.log(salary);

// let base = prompt(`Введи сюда число `);
// base = Number(base);
// console.log(base);

// let power = prompt(`Введи сюда степень`);
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);
 
// Начинаем выполнять код по условия спомощью if  Логическое ветление----------------------------------------
// if (5 > 100) {
//     console.log('Первый код');
// }
//  else {
//     console.log('Второй код если в условии if стоит false');    
//  }

// const salary = prompt('Введи сюда свою зарплату');

// if (salary <= 500) {
//     console.log('Уровень зарплаты 1');
// }
// else if (salary > 500 && salary < 1500) {
//     console.log('Уровень зарплаты 2');
// }
// else {
//    console.log('Уровень зарплаты 3') 
// };

// Тернарный оператор-------------------------------------------------------------------------
const balance = -1000;

const message = balance >= 0 ? 'позитивный баланс' : 'отрецательный баланс';
console.log(message);