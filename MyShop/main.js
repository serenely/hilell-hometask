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
const login = document.querySelector('.login__div')
const form = document.getElementById('singup')
const formData = document.querySelector('.form-data')
console.log(form);


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
    login.classList.add('block');
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

form.addEventListener('submit', e => {
    e.preventDefault()
    let valid = true;
    console.log(form.elements.important.value);
    if (form.elements.important.value === '' && form.elements.important2.value === '' || form.elements.important3.value === '') {
        alert('Ошибочка вышла... Заполните, пожалуйста, все поля co звездочкой *')
        valid = false;
    }

    if (valid) {
        for (let i = 0; i < form.elements.length - 1; i++) {
            const div = document.createElement('div')
            div.textContent = `${form.elements[i].name} : ${form.elements[i].value}`
            formData.append(div)
        }
    }
})


