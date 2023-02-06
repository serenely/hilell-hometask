const changeImg = () => {
    let rand = 1 - 0.5 + Math.random() * (9 - 1 + 1);
    rand = Math.round(rand);
    document.querySelector('img').src = 'images/' + rand + '.jpg'
}
changeImg();

document.querySelector('button').addEventListener('click', changeImg);