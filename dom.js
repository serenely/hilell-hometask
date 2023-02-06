
const count = 10;
let array = new Array(count);


function fillMatrix() {
    for (let i = 0; i < count; ++i) {
        array[i] = new Array(count);
        for (let j = 0; j < count; ++j) {
            array[i][j] = i * 10 + j + 1;
        }
    }
}
function showMatrix() {
    for (let i = 0; i < count; ++i) {
        for (let j = 0; j < count; ++j) {
            document.write(array[i][j].toString());
        }
        document.write("<br />");
    }
}

fillMatrix();
console.log(array);
showMatrix();