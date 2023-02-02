const imput = document.querySelector('.imput');
const divImput = document.querySelector('.div__imput')

const showMessage = () => {
    divImput.classList.add('div__imput__yes')
}
const removeMessage = () => {
    divImput.classList.remove('div__imput__yes')
}
imput.addEventListener('mouseover', showMessage)
imput.addEventListener('mouseout', removeMessage)