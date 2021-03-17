
// switch--------------------------------------------------------------------------

// const stars = 8;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 40;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 80;
//         break;
//     case 5:
//         price = 150;
//     default: 
//     console.log ('Такого количества звезд нет!!!');
        

// }
// console.log(price);

// const stars = 6;
// let price;

// switch (stars) {
//     case 1:
//         case 2:
//         price = 30;
//         break;
//     case 3:
//         case 4:
//         price = 80;
//         break;
//     case 5:
//         price = 150;
//         break;

//     default: 
//     console.log ('Такого количества звезд нет!!!');
        

// }
// console.log(price);

// const option = 7;
// let message = '';

// switch (option) {
//     case 1:
//         message = "Ваш товар доставят завтра";
//         break;
//     case 2:
//         message = 'Заберите на отделении завтра';
//         break;
//     case 3:
//         message = 'товар отсутствует';
//         break;
//     default: console.log('С Вами свяжится оператор');
        
// }
// console.log(message);


// Цикл for----------------------------------------------------------------------------
// for (let i = 0; i <= 5; i += 1){
//     console.log(i);
// }

// let balanse = 10000;
// const payment = 2000;

// console.log(`Общая сумма заказа стостовляет ${payment} грн.Проверяем количество доступных средств на счету`)

// if (payment <= balanse) {
//     console.log('OK');
//     balanse -= payment;
//     console.log(`На счету осталось ${balanse} грн.`)
// }
// else { console.log('На счету не хватает денежных средств') }

// console.log('Операция завершена.Спасибо!');

// let totalSpent =2000;
// let payment = 500;
//  let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log(`Вы получаете скидку в размере 2 %`);
//     discount = 0.02;
// }
// else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Вы получаете скидку 5%');
//     discount = 0.05;
// }
// else if ( totalSpent > 5000) {
//     console.log('Золотой партнер, Вы получаете скидку в 10%')
//     discount = 0.1;
// }
// else {console.log('Скидка 0 %')}
// payment -= payment * discount;
    

// console.log(`Оформлен заказ на сумму ${payment} и получаете скидку в размере ${discount * 100} %`)

// totalSpent += payment;
// console.log(`Общая сумма потраченного в магазине  состовляет ${totalSpent}`);