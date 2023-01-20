//  Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1.Знайти суму та кількість позитивних елементів.

// const result = arr.filter(el => el >= 0);

// console.log(result);

// const res = result.reduce((partialSum, a) => partialSum + a, 0)

// console.log(res);



// 2. Знайти мінімальний елемент масиву та його порядковий номер.
// const min = Math.min(...arr)
// console.log(min);
// const pos = arr.indexOf(min)
// console.log(pos); 



// 3. Знайти максимальний елемент масиву та його порядковий номер.
// const max = Math.max(...arr)
// console.log(max);
// const position = arr.indexOf(max)
// console.log(position); 



// 4. Визначити кількість негативних елементів.
    // const result2 = arr.filter(el => el < 0);
    // console.log(result2);
    // console.log(result2.length);




// 5. Знайти кількість непарних позитивних елементів.
// const res3 = arr.filter(el => el % 2 != 0 && el > 0)
// console.log(res3);
// console.log(res3.length);




// 6. Знайти кількість парних позитивних елементів.
//     const res4 = arr.filter(el => el % 2 === 0 && el > 0)
// console.log(res4);
// console.log(res4.length);



// 7. Знайти суму парних позитивних елементів.
// const res5 = arr.filter(el => el % 2 === 0 && el > 0)
// console.log(res5);
// const result5 = res5.reduce((partialSum, a) => partialSum + a, 0)
// console.log(result5);




// 8. Знайти суму непарних позитивних елементів.
// const res6 = arr.filter(el => el % 2 != 0 && el > 0)
// console.log(res6);
// const result6 = res6.reduce((partialSum, a) => partialSum + a, 0)
// console.log(result6);



// 9 Знайти добуток позитивних елементів.
// const res7 = arr.filter(el => el > 0)
// console.log(res7);
// const result7 = res7.reduce((partialMulti, a) => partialMulti * a, 1)
// console.log(result7);



// 10. Знайти найбільший серед елементів масиву, останні обнулити.
let max = arr[0];
let maxi = 0;
for (let i = 1; i < arr.length; i++) {
if (arr[i] > max) {
    max = arr[i];
    arr[maxi] = 0;
    maxi = i;
} else {
    arr[i] = 0;
}
}

console.log(arr);
