// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (arr, item) => {
    return arr.splice(item-1, 1)
}
removeElement(array, 5)
console.log(array);