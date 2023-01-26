//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3

// sum(5) = 8

// sum(20) = 28

let sum = function(){
let result = 0;

    return function (x) {
        result = result + x;
        return result
    }
}

let summa = sum()
console.log(summa(3));
console.log(summa(3));
console.log(summa(3));
console.log(summa(3));