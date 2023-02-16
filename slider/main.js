const HIDE_ELEMENT_CLASS = 'd-none'
const prevBtn = document.querySelector('.btn__prev__button')
const nextBtn = document.querySelector('.btn__next__button')
const prevBtnDiv = document.querySelector('.btn__prev__div')

let currentPic;


nextBtn.addEventListener('click', () => {
    currentPic = document.querySelector('.slider_img.active')
    currentPic.classList.remove('active')
    currentPic.nextElementSibling.classList.add('active')
    if (currentPic.nextElementSibling.nextElementSibling === null) {
        nextBtn.classList.add(HIDE_ELEMENT_CLASS)
    }
})



prevBtn.addEventListener('click', () => {
    currentPic = document.querySelector('.slider_img.active')
    currentPic.classList.remove('active')
    currentPic.previousElementSibling.classList.add('active')
    console.log(currentPic.previousElementSibling.previousElementSibling);
    if (currentPic.previousElementSibling.previousElementSibling === null) {
        prevBtn.classList.add(HIDE_ELEMENT_CLASS)
    }
})
