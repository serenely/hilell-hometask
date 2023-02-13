const li = document.querySelector('.category__li')
const newUl = document.querySelector('.new__tab__ul__none')
const infoHat = document.querySelector('#hat')
const infoCap = document.querySelector('#cap')
const infoPanama = document.querySelector('#panama')
const infoBeret = document.querySelector('#beret')
const newInfoHat = document.querySelector('.info__hat__none')
const newInfoCap = document.querySelector('.info__cap__none')
const newInfoPanama = document.querySelector('.info__panama__none')
const newInfoBeret = document.querySelector('.info__beret__none')
const buyBtn = document.querySelectorAll('.btn__buy')



const addNewUl = () => {
    newUl.classList.toggle('new__tab__ul__block')
}
li.addEventListener('click', addNewUl)

const addInfoHat = () => {
    newInfoHat.classList.toggle('info__hat__block');
}

infoHat.addEventListener('click', addInfoHat)

const addInfoCap = () => {
    newInfoCap.classList.toggle('info__cap__block');
}

infoCap.addEventListener('click', addInfoCap)

const addInfoPanama = () => {
    newInfoPanama.classList.toggle('info__panama__block');
}

infoPanama.addEventListener('click', addInfoPanama)

const addInfoBeret = () => {
    newInfoBeret.classList.toggle('info__beret__block');
}

infoBeret.addEventListener('click', addInfoBeret)

const alertQuestion = () => {
    alert('Товар куплен');
    const cssClasses = [
        'info__hat__block',
        'info__cap__block',
        'info__panama__block',
        'info__beret__block'
    ];
    [newInfoHat, newInfoCap, newInfoPanama, newInfoBeret].forEach((el, i) => {
        console.log(cssClasses[i]);
        el.classList.remove(cssClasses[i])
    })
}

buyBtn.forEach((el) => el.addEventListener('click', alertQuestion))