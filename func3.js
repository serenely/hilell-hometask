
//1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише 
// числових елементів даного масиву.
// const array = [0, 1, 32, 'f',43,'add', 2,'joj','goh', 94]
    
// const average = (arr) => {
//     const newArr = arr.filter(el => el > 0)
//     const sum = newArr.reduce((a, b) => a + b)
//     const averageNum = sum / newArr.length
//     console.log(newArr);
//     console.log(newArr.length);
//     console.log(sum);
//     console.log(averageNum);
// }
// average(array)


// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
//  У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
//  вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// const doMath = (x, y, znak) => {
//     return eval(x + znak + y)
    
// }
// const x = prompt('Введите x');
// const y = prompt('Введите y');
// const znak = prompt('Введите знак');
// console.log(doMath(x,y,znak)); 


// 3. Написати функцію заповнення даними користувача двомірного масиву.
//  Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

// const arr = [
//     array =[

//     ]
// ]
// const b = prompt('Введите длину первого массива')
// const d = prompt('Введите длину второго массива')

// const fullArray = (a, f) => {
//     for (let i = 1; i <= b; i++) {
//         a = prompt('Введите цифру первого массива')
//         arr.push(a);
//     }
//     for (let j = 1; j <= d; j++) {
//         f = prompt('Введите цифру второго массива')
//         array.push(f);
    
//     }
// }
// fullArray()
// console.log(arr);


// 4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

// const deleteLetters = (a, del) => {
//     let b = prompt(' введите чилсо удаления 1')
//     del = prompt(' введите чилсо удаления 2')

//      a.split(del, b)
// }

// console.log(deleteLetters(" hello world", ['l', 'd'])); 

const deleteLetters = (str, del) => {
    // // const strArr = str.replace(`${del}`, '');
    // const commaDelete = function () {
    //     for (let k = 0; k <= 3; k++) {
    //         strArr.replace(',', ' ')
    //     }
    // }
    // const strArr = str.split('l').toString().commaDelete()
    
    // console.log(strArr);        
return str.split(`${del}`).toString().replace(',', '').replace(',', '').replace(',', '').split(`${del}`).toString();
    
}

const str = 'hello world'
console.log(deleteLetters(str, ['l']));