const li = document.querySelector('.category__li')
const ul = document.querySelector('.category__ul')
const newUl = document.querySelector('.new__tab__ul__none')
const newLi = document.querySelectorAll('.new__tab__li')
const infoHat = document.querySelector('#hat')
const infoCap = document.querySelector('#cap')
const infoPanama = document.querySelector('#panama')
const infoBeret = document.querySelector('#beret')
const newInfoHat = document.querySelector('.info__hat__none')
const newInfoCap = document.querySelector('.info__cap__none')
const newInfoPanama = document.querySelector('.info__panama__none')
const newInfoBeret = document.querySelector('.info__beret__none')
const addBtn = document.querySelectorAll('.add__btn')
const login = document.querySelector('.login__div')
const formData = document.querySelector('.form-data')
const cart = document.querySelector('.cart-shop')
const cartUl = document.querySelector('.cart__ul')
const cartBtn = document.querySelector('.cart__btn')
const cartDiv = document.querySelector('.cart__div')
const activeLi = document.querySelector('.new__tab__li.active')
const form = document.getElementById('singup')
const hat = document.getElementById('hat')
const cap = document.getElementById('cap')
const panama = document.getElementById('panama')
const beret = document.getElementById('beret')
const hatBtn = document.getElementById('hat__btn')
const capBtn = document.getElementById('cap__btn')
const panamaBtn = document.getElementById('panama__btn')
const beretBtn = document.getElementById('beret__btn')
const removeOrder = document.querySelector('.cart__remove__btn')

const productRange = [hat.textContent, cap.textContent, panama.textContent, beret.textContent]
const productRangeBtn = [hatBtn, capBtn, panamaBtn, beretBtn]
console.log(hatBtn);

// addToLocalStorage = () => {
//     )
// }
addCart = () => {
    const li = `<li> <button> Remove</button></li>  <br/> `
    cartUl.innerHTML += li
    cartBtn.classList.add('block')
}

const addNewUl = () => {
    newUl.classList.toggle('new__tab__ul__block')
}
li.addEventListener('click', addNewUl)

let addLocalHat = () => {
    localStorage.setItem('orders', productRange[0])
    cartUl.innerHTML += localStorage.getItem('orders')
    cartBtn.classList.add('block')

}
let addLocalCap = () => {
    localStorage.setItem('orders1', productRange[1])
    addCart()


}
let addLocalPanama = () => {
    localStorage.setItem('orders2', productRange[2])
    addCart()



}
let addLocalBeret = () => {
    localStorage.setItem('orders3', productRange[3])
    cartUl.innerHTML += localStorage.getItem('orders3')
    cartBtn.classList.add('block')


}
// Hat
const addInfoHat = () => {
    newInfoHat.classList.toggle('info__hat__block');
}

infoHat.addEventListener('click', addInfoHat)
hatBtn.addEventListener('click', addLocalHat)


// Cap
const addInfoCap = () => {
    newInfoCap.classList.toggle('info__cap__block');
}

infoCap.addEventListener('click', addInfoCap)
capBtn.addEventListener('click', addLocalCap)

// Panama
const addInfoPanama = () => {
    newInfoPanama.classList.toggle('info__panama__block');
}
infoPanama.addEventListener('click', addInfoPanama)
panamaBtn.addEventListener('click', addLocalPanama)


// Beret
const addInfoBeret = () => {
    newInfoBeret.classList.toggle('info__beret__block');
}

infoBeret.addEventListener('click', addInfoBeret)
beretBtn.addEventListener('click', addLocalBeret)


const cssClasses = [
    'info__hat__block',
    'info__cap__block',
    'info__panama__block',
    'info__beret__block'
];

const alertQuestion = () => {
    login.classList.add('block');

    [newInfoHat, newInfoCap, newInfoPanama, newInfoBeret].forEach((el, i) => {
        console.log(cssClasses[i]);
        el.classList.remove(cssClasses[i])
    })
}

form.addEventListener('submit', e => {
    e.preventDefault()
    let valid = true;
    console.log(form.elements.important.value);
    if (form.elements.important.value === '' && form.elements.important2.value === '' || form.elements.important3.value === '') {
        alert('Ошибочка вышла... Заполните, пожалуйста, все поля co звездочкой  *')
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



cartBtn.addEventListener('click', alertQuestion)

const switchBlock = () => {
    cartUl.classList.toggle('block')
}
cart.addEventListener('click', switchBlock())
removeOrder.addEventListener('click', e => e.remove())

