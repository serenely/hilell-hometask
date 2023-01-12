const num1 = prompt('Enter your first num:');
const num2 = prompt('Enter your second num:');
const num3 = prompt('Enter your third num:');

const averageNum = () => (+num1 + +num2 + +num3) / 3;

alert(averageNum())

const year = prompt('Ваш год рождения?');
const town = prompt('Ваш город проживания?');
const sports = prompt('Ваш любимый вид спорта?');

alert(year);
alert(town);

if (town === 'Киев') {
    alert(`Ты живешь в столице Украины`)
} else if (town === 'Вашингтон') {
    alert(`Ты живешь в столице США`)
} else if (town === 'Лондон') {
    alert(`Ты живешь в столице Великобритании`)
} else {
    alert(`Ты живешь в городе ${town}`)
}