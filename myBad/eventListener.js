// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http / https. Якщо протокол не вказаний - додаємо


const aPerevirkaFirst = document.querySelector('.first__link')
const aPerevirkaSecond = document.querySelector('.second__link')

console.log(aPerevirkaFirst.href);
console.log(aPerevirkaSecond);

if (aPerevirkaFirst.href.includes('http') || aPerevirkaFirst.href.includes('https')) {
    console.log(true);
} else {
    aPerevirkaFirst.href('http');
}