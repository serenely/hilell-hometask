const currentYear = 2023;
const year = prompt('Ваш год рождения?');
const town = prompt('Ваш город проживания?');
const sports = prompt('Ваш любимый вид спорта?');
let result1 = '';
let result2 = '';


let result3 = currentYear - year;
if (year === null) {
    result3 = ''
}

let result4 = town;
if (town === null) {
    result4 = ''
}

if (town === 'Киев') {
    result1 = (`Ты живешь в столице Украины!`)
} else if (town === 'Вашингтон') {
    result1 = (`Ты живешь в столице США!`)
} else if (town === 'Лондон') {
    result1 = (`Ты живешь в столице Великобритании!`)
} else if (town === null) {
    result1 = ''
} else {
    result1 = (`Ты живешь в городе ${town}!`)
}

const football = 'Cristiano Ronaldo';
const box = 'Oleksandr Usyk';
const taiBox = 'Conchúr Gréagóir';

if (sports === 'Футбол') {
    result2 =(`Футбол? Круто, хочешь стать как ${football} ?`)
} else if (sports === 'Бокс') {
    result2 =(`Бокс? Круто, хочешь стать как ${box} ?`)
} else if (sports === 'Тайский бокс') {
    result2 =(`Тайский бокс? Круто, хочешь стать как ${taiBox} ?`)
}

if (year === null) {
    alert('Жаль, что вы не захотели указать год Вашего рождения (')
} else if (sports === null ) {
    alert('Жаль, что вы не захотели указать Ваш любимый спорт (')
} else if (town === null) {
    alert('Жаль, что вы не захотели указать Ваш город проживания(')
} 



alert(result3 + `${ result4}. ` + result1 + ' ' + result2)
