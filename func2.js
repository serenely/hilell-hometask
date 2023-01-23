// Реалізуйте функцію generateKey(length, characters),
//  яка повертає рядок випадкових символів із набору characters довжиною length
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, characters) => {
    return characters.slice(Math.random() * length)

}
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i