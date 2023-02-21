const aPerevirkaFirst = document.querySelector('.first__link')
const aPerevirkaSecond = document.querySelector('.second__link')

if (aPerevirkaFirst.href.includes('http') || aPerevirkaFirst.href.includes('https')) {
    console.log(true);
} else {
    aPerevirkaFirst.href('http');
}
