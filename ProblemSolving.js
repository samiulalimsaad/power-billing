/**
 *
 * @param {number[]} array number
 * @param {number} number number
 */
function rotateLeft(array, number) {
    const length = array.length;
    const left = array.slice(number % length, length);
    const right = array.slice(0, number % length);
    return left.concat(right);
}

console.log(rotateLeft([1, 2, 3, 4, 5], 4));
